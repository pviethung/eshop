import { useEffect, useState } from 'react';
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

  useEffect(() => {
    setMouted(true);
  }, []);

  return (
    <AppContainer>
      <Divider x={100} />
      <PageTitle>Your Cart</PageTitle>
      {mouted && (
        <Row>
          <Col w={3 / 4}>
            <CartList cart={cart} />
          </Col>
          <Col w={1 / 4}>
            <CartSummary
              totalPrice={cart.totalPrice}
              totalQuantity={cart.itemCount}
            />
          </Col>
        </Row>
      )}
    </AppContainer>
  );
};
export default Cart;
