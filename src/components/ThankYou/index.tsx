import { GoCheck } from 'react-icons/go';
import { useTheme } from 'styled-components';
import { Order } from '../../models';
import { Container } from './style';

const ThankYou = ({ order }: { order: Order }) => {
  const { mainColor } = useTheme();

  return (
    <Container>
      <h1 style={{ fontSize: '6rem', textAlign: 'center' }}>Thank you</h1>
      <GoCheck color={mainColor} fontSize={'15rem'} />
      <p>
        Your order is on its way,<br></br>Thank you for choosing us
      </p>
    </Container>
  );
};
export default ThankYou;
