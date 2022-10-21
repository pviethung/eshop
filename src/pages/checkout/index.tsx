import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CheckoutList from '../../components/CheckoutList';
import CheckoutShippingInfo from '../../components/CheckoutShippingInfo';
import CheckoutSummary from '../../components/CheckoutSummary';
import Divider from '../../components/Divider';
import { AppContainer } from '../../components/GlobalStyle';
import Col from '../../components/grid-layout/Col';
import Row from '../../components/grid-layout/Row';
import PageTitle from '../../components/PageTitle';
import { useCartContext } from '../../hooks';
import { Order } from '../../models';

const Checkout = () => {
  const { cart } = useCartContext();
  const [mouted, setMouted] = useState(false);

  const [submit, setSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(true);
  const [submitError, setSubmitError] = useState(false);
  const [shippingFee, setShippingFee] = useState(2);
  const [orderData, setOrderData] = useState<Order | null>(null);
  const [discount, setDiscount] = useState(0);

  const router = useRouter();

  const handleSubmitEnd = (error?: boolean, data?: any) => {
    setSubmitted(true);
    if (error) {
      setSubmit(false);
      setSubmitError(true);
      return;
    }
    setOrderData(data);
    setSubmitError(false);
  };

  const handleSubmitStart = () => {
    setSubmit(true);
    setSubmitted(false);
  };

  useEffect(() => {
    if (cart.itemCount === 0) router.replace('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (submit && submitted && !submitError && orderData) {
      router.replace(`/checkout/${orderData.orderId}`);
    }
  }, [orderData, router, submit, submitError, submitted]);

  useEffect(() => {
    setMouted(true);
  }, []);

  if (!mouted) {
    return false;
  }

  if (cart.itemCount === 0) {
    return false;
  }
  return (
    <AppContainer>
      <Divider x={100} />
      <PageTitle>Checkout</PageTitle>
      <Row>
        <Col lg={1} w={2 / 5}>
          <CheckoutList items={cart.items} />
        </Col>
        <Col lg={1} w={1.5 / 5}>
          <CheckoutShippingInfo
            cart={cart}
            onShippingChange={(shippingFee) => setShippingFee(shippingFee)}
            onDiscountChange={(discount) => setDiscount(discount)}
            totalPrice={cart.totalPrice}
            onSubmitEnd={handleSubmitEnd}
            submit={submit}
          />
        </Col>
        <Col lg={1} w={1.5 / 5}>
          <CheckoutSummary
            totalPrice={cart.totalPrice}
            shippingFee={shippingFee}
            discount={discount}
            loading={!submitted}
            onSubmitstart={handleSubmitStart}
          />
        </Col>
      </Row>
    </AppContainer>
  );
};
export default Checkout;
