import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { StyledButton } from '../components/Button/style';
import CartList from '../components/CartList';
import CartSummary from '../components/CartSummary';
import Divider from '../components/Divider';
import { AppContainer } from '../components/GlobalStyle';
import Col from '../components/grid-layout/Col';
import Row from '../components/grid-layout/Row';
import PageTitle from '../components/PageTitle';
import { useCartContext } from '../hooks';

const Cart = () => {
  const { cart } = useCartContext();
  const [mouted, setMouted] = useState(false);
  const { mainColor } = useTheme();

  useEffect(() => {
    setMouted(true);
  }, []);

  if (!mouted) {
    return false;
  }

  return (
    <AppContainer>
      <Divider x={100} />
      <PageTitle>Your Cart {cart.itemCount === 0 && 'is empty 😥'}</PageTitle>
      {cart.itemCount > 0 && (
        <Row>
          <Col lg={1} w={3 / 4}>
            <CartList cart={cart} />
          </Col>
          <Col lg={1} w={1 / 4}>
            <CartSummary
              totalPrice={cart.totalPrice}
              totalQuantity={cart.itemCount}
            />
          </Col>
        </Row>
      )}
      {cart.itemCount === 0 && (
        <div style={{ textAlign: 'center' }}>
          <div>
            <Image
              src="https://cdn.shopify.com/s/files/1/1473/1066/t/2/assets/empty-cart-icon.png?v=34188659194047804731474020620"
              alt="empty-cart"
              width={190}
              height={215}
            />
          </div>
          <Divider x={40} />
          <h3 style={{ color: mainColor }}>
            You have no items in your shopping cart.
          </h3>
          <Divider x={30} />
          <Link href="/">
            <StyledButton hoverBorder={mainColor} fill="true" size="md">
              Shop now
            </StyledButton>
          </Link>
          <Divider x={40} />
        </div>
      )}
    </AppContainer>
  );
};
export default Cart;
