import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import useSWRImmutable from 'swr/immutable';
import Divider from '../../components/Divider';
import { AppContainer } from '../../components/GlobalStyle';
import ThankYou from '../../components/ThankYou';
import { getOrder } from '../../services/firebase';

const CheckOutDetail = () => {
  const { query, push } = useRouter();
  const { data, error } = useSWRImmutable(
    query.orderId ? `/orders/${query.orderId}` : null,
    () => getOrder(query.orderId as string)
  );

  let content: React.ReactNode = '';

  useEffect(() => {
    if (error) {
      push('/');
    }

    return () => {};
  }, [error, push]);

  if (!data) {
    content = (
      <div style={{ textAlign: 'center' }}>
        <BeatLoader color={'red'} />
      </div>
    );
  } else {
    content = <ThankYou order={data} />;
  }

  return (
    <AppContainer>
      <Divider x={80} />
      {content}
    </AppContainer>
  );
};
export default CheckOutDetail;
