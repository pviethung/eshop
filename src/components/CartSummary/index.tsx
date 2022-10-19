import Link from 'next/link';
import { useTheme } from 'styled-components';
import { CART_ACTIONS } from '../../context/cart/types';
import { useCartContext } from '../../hooks';
import { moneyFormat } from '../../utils';
import Button from '../Button';
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
  const { dispatch } = useCartContext();

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
      <Button
        onClick={(e) =>
          dispatch({
            type: CART_ACTIONS.CLEAR_CART,
          })
        }
        hoverBorder={mainColor}
        as={'a'}
        fill="true"
        size="md"
      >
        Clear shopping cart
      </Button>
      <Link href="/checkout" passHref>
        <StyledButton hoverBorder={mainColor} as={'a'} fill="true" size="md">
          proceed to checkout
        </StyledButton>
      </Link>
    </Container>
  );
};
export default CartSummary;
