import { useTheme } from 'styled-components';
import { moneyFormat } from '../../utils';
import { Container, Promotion, SButtonWithState } from './style';

const CheckoutSummary = ({
  totalPrice,
  shippingFee,
  discount,
  loading,
  onSubmitstart,
}: {
  totalPrice: number;
  discount: number;
  shippingFee: number;
  loading: boolean;
  onSubmitstart: () => void;
}) => {
  const { mainColor } = useTheme();
  return (
    <Container>
      <h3>
        <span>Subtotal</span>
        <span>{moneyFormat(totalPrice)}</span>
      </h3>
      {shippingFee > 0 && (
        <Promotion>
          <span>Shipping fee</span>
          <span>+ {moneyFormat(shippingFee)}</span>
        </Promotion>
      )}
      {discount > 0 && (
        <Promotion>
          <span>Discount</span>
          <span>- {moneyFormat(discount)}</span>
        </Promotion>
      )}

      <h2>
        <span>total</span>
        <span>{moneyFormat(totalPrice - discount + shippingFee)}</span>
      </h2>
      <SButtonWithState
        onClick={onSubmitstart}
        loading={loading}
        innerText="Checkout"
        type="button"
        hoverBorder={mainColor}
        size="md"
        fill="true"
      />
    </Container>
  );
};
export default CheckoutSummary;
