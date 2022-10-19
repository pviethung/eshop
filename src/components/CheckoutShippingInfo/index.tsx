import { Form, Formik, FormikProps } from 'formik';
import { useEffect, useRef } from 'react';
import { CART_ACTIONS } from '../../context/cart/types';
import { useAuthContext, useCartContext, useToast } from '../../hooks';
import { Cart } from '../../models';
import { postOrder } from '../../services/firebase';
import { getRandomId } from '../../utils';
import Divider from '../Divider';
import DropdownSelect from '../DropdownSelect';
import FormWrap from '../forms/FormWrap';
import TextareaField from '../forms/TextareaField';
import TextField from '../forms/TextField';
import PromotionInputField from '../PromotionInputField';
import { Container } from './style';

interface FormValues {
  name: string;
  address: string;
  note: string;
  shippingFee: number;
  discount: number;
}

const SHIPPING_METHODS = [
  { value: 2, label: 'COD' },
  { value: 0, label: 'I have no money 😢' },
];

const CheckoutShippingInfo = ({
  cart,
  onShippingChange,
  onDiscountChange,
  totalPrice,
  onSubmitEnd,
  submit,
}: {
  totalPrice: number;
  submit: boolean;
  cart: Cart;
  onSubmitEnd: (error?: boolean, data?: any) => void;
  onShippingChange: (shippingFee: number) => void;
  onDiscountChange: (discount: number) => void;
}) => {
  const formik = useRef<
    //use ref in formik: https://github.com/jaredpalmer/formik/issues/2290
    FormikProps<FormValues>
  >(null);

  const submitting = useRef(false);
  const submitData = useRef<any>();
  const { user } = useAuthContext();
  const { showToast } = useToast('error');
  const { dispatch } = useCartContext();

  useEffect(() => {
    (async () => {
      if (submit && formik.current) {
        if (submitting.current) return;
        try {
          await formik.current?.submitForm();
          if (!formik.current?.isValid) {
            onSubmitEnd(true);
            return;
          }
        } catch {
          showToast('Something went wrong, reload the page if possible');
          onSubmitEnd(true);
          return;
        }
        dispatch({
          type: CART_ACTIONS.CLEAR_CART,
        });
        onSubmitEnd(false, submitData.current);
        submitting.current = true;
      }
    })();
    return () => {};
  }, [showToast, submit, onSubmitEnd, dispatch]);

  return (
    <Container>
      <FormWrap>
        <Formik<FormValues>
          innerRef={formik}
          initialValues={{
            name: '',
            address: '',
            note: '',
            shippingFee: SHIPPING_METHODS[0].value,
            discount: 0,
          }}
          //   validateOnChange={false}
          onSubmit={async (values, formikHelpers) => {
            const orderId = getRandomId();
            const orderData = { ...values, cart, orderId };
            if (!user?.userId) return;

            submitData.current = orderData;
            await postOrder(user.userId, orderData, orderId);
            /*
            id,
            name,
            product
            ...
            */
          }}
        >
          {(props) => (
            <Form noValidate>
              <TextField label="Name" required name="name" id="name" />
              <TextareaField
                label="Address"
                required
                name="address"
                id="address"
              />
              <Divider x={30} />
              <TextareaField label="Note" name="note" id="note" />
              <Divider x={30} />
              <p>Shipping</p>
              <DropdownSelect
                defaultValue={SHIPPING_METHODS[0]}
                options={SHIPPING_METHODS}
                onChange={(value) => {
                  if (!value) return;
                  props.setFieldValue('shippingFee', value.value);
                  onShippingChange(value.value);
                }}
              />
              <Divider x={30} />

              <p>Promotion code</p>
              <PromotionInputField
                totalPrice={totalPrice}
                onSubmit={(discount: number, error?: string) => {
                  onDiscountChange(discount);

                  if (error) {
                    props.setFieldError('discount', error);
                    return;
                  }
                  props.setFieldValue('discount', discount);
                }}
              />
              <Divider x={40} />
            </Form>
          )}
        </Formik>
      </FormWrap>
    </Container>
  );
};
export default CheckoutShippingInfo;
