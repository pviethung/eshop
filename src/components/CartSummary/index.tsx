import Link from 'next/link';
import { useTheme } from 'styled-components';
import { moneyFormat } from '../../utils';
import { StyledButton } from '../Button/style';
import { Container } from './style';
const CartSummary = ({
  totalQuantity,
  totalPrice,
}: {
  totalQuantity: number;
  totalPrice: number;
}) => {
  const { mainColor } = useTheme();
  return (
    <Container>
      <p>Items</p>
      <h4>{totalQuantity} item(s)</h4>
      <p>Price</p>
      <h4>{moneyFormat(totalPrice)}</h4>
      <Link href="/" passHref>
        <StyledButton hoverBorder={mainColor} as={'a'} fill="true" size="md">
          Continue shopping
        </StyledButton>
      </Link>
      <Link href="/404" passHref>
        <StyledButton hoverBorder={mainColor} as={'a'} fill="true" size="md">
          Checkout
        </StyledButton>
      </Link>
    </Container>
  );
};
export default CartSummary;
