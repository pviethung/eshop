import { Order } from '../../models';
import { moneyFormat } from '../../utils';
import CartList from '../CartList';
import { Container, OrderLine, OrderSummary, OrderVariants } from './style';

const OrderList = ({ orders }: { orders: Order[] }) => {
  return (
    <Container>
      {orders.length > 0 &&
        orders.map((order) => (
          <OrderLine key={order.orderId}>
            <p>
              Order No: <span>{order.orderId}</span>
            </p>
            <OrderVariants>
              <CartList cart={order.cart} />
              <OrderSummary>
                <p>Total</p>
                <p>{order.cart.itemCount} item(s)</p>
                <p>{moneyFormat(order.cart.totalPrice)}</p>
              </OrderSummary>
            </OrderVariants>
          </OrderLine>
        ))}
    </Container>
  );
};
export default OrderList;
