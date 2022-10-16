import { debounce } from 'debounce';
import { Form, Formik, FormikProps } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { CART_ACTIONS } from '../../context/cart/types';
import { useCartContext } from '../../hooks';
import { Cart } from '../../models';
import { moneyFormat } from '../../utils';
import {
  CartLineHeader,
  CartLineItem,
  Container,
  DeleteLine,
  InputError,
  ItemContent,
  ItemImage,
  Price,
  Quantity,
  Size,
  Title,
  Vendor,
} from './style';

const quantitySchema = (maxQty: number) =>
  Yup.object({
    quantity: Yup.number()
      .typeError('Quantity must be a number')
      .required()
      .min(1, 'Invalid quantity')
      .max(maxQty, 'Not enough quantity'),
  });

const CartList = ({ cart }: { cart: Cart }) => {
  const { mainColor } = useTheme();
  const { dispatch } = useCartContext();
  const [disabled, setDisabled] = useState(false);
  const delaySubmit = useMemo(
    () =>
      debounce((formik: FormikProps<{ quantity: string }>) => {
        setDisabled(false);
        if (formik.isValid) {
          formik.submitForm();
        }
      }, 500),
    []
  );
  const handleQuantityChange = (
    formik: FormikProps<{ quantity: string }>,
    type: 'plus' | 'minus'
  ) => {
    return (e: React.MouseEvent) => {
      const prevValue = +formik.values.quantity;
      setDisabled(true);
      formik.setValues(
        {
          quantity:
            type === 'plus'
              ? (prevValue + 1).toString()
              : (prevValue - 1).toString(),
        },
        true
      );

      delaySubmit(formik);
    };
  };

  return (
    <Container>
      {cart.itemCount > 0 && (
        <CartLineHeader>
          <div>Product</div>
          <div>Quantity</div>
          <div>Price</div>
        </CartLineHeader>
      )}
      {cart.itemCount > 0 &&
        cart.items.map((product) =>
          Object.entries(product.variants).map(([size, quantity]) => (
            <CartLineItem key={`${product.id}-${size}`}>
              <ItemImage>
                <Link href={`/products/${product.id}`}>
                  <a>
                    <Image
                      alt={product.title}
                      src={product.images[0]}
                      width={120}
                      height={150}
                    />
                  </a>
                </Link>
              </ItemImage>
              <ItemContent>
                <Vendor>{product.vendor}</Vendor>
                <Title>
                  <Link href={`/products/${product.id}`}>
                    <a>{product.title}</a>
                  </Link>
                </Title>
                <Size>Size: {size}</Size>
                <Price>{moneyFormat(product.price)}</Price>
              </ItemContent>
              <Quantity>
                <Formik
                  onSubmit={(values) => {
                    const newQuantity = parseInt(values.quantity) - quantity;
                    dispatch({
                      type: CART_ACTIONS.ADD_LINE_ITEM,
                      payload: {
                        ...product,
                        variants: {
                          [size]: newQuantity,
                        },
                      },
                    });
                  }}
                  initialValues={{
                    quantity: quantity.toString(),
                  }}
                  validationSchema={quantitySchema(
                    product.inventory_quantity - product.quantity + quantity
                  )}
                >
                  {(props) => {
                    return (
                      <Form>
                        <button
                          disabled={parseInt(props.values.quantity) === 1}
                          type="button"
                          onClick={handleQuantityChange(props, 'minus')}
                        >
                          -
                        </button>
                        <input
                          {...props.getFieldProps('quantity')}
                          disabled={disabled}
                          type="text"
                          onBlur={(e) => {
                            props.handleBlur(e);
                            const value = +e.target.value;
                            if (
                              value > product.inventory_quantity ||
                              value < 1
                            ) {
                              props.setValues({
                                quantity: quantity.toString(),
                              });
                              return;
                            }
                            props.submitForm();
                          }}
                        ></input>

                        <button
                          disabled={
                            parseInt(props.values.quantity) ===
                            product.inventory_quantity -
                              product.quantity +
                              quantity
                          }
                          type="button"
                          onClick={handleQuantityChange(props, 'plus')}
                        >
                          +
                        </button>
                        {props.errors.quantity && (
                          <InputError>{props.errors.quantity}</InputError>
                        )}
                      </Form>
                    );
                  }}
                </Formik>
              </Quantity>
              <Price>{moneyFormat(product.price * quantity)}</Price>
              <DeleteLine
                onClick={(e) => {
                  return dispatch({
                    type: CART_ACTIONS.DELETE_LINE_ITEM,
                    payload: {
                      productId: product.id,
                      variantSize: size,
                    },
                  });
                }}
              >
                <BiTrash fontSize={25} color={mainColor} />
              </DeleteLine>
            </CartLineItem>
          ))
        )}
    </Container>
  );
};
export default CartList;
