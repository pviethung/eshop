import useSWR from 'swr';
import { useAuthContext } from '../hooks';
import { getOrderIds, getOrders } from '../services/firebase';
//@ts-ignore
import FireStoreParser from 'firestore-parser';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { useTheme } from 'styled-components';
import Divider from '../components/Divider';
import { AppContainer } from '../components/GlobalStyle';
import OrderList from '../components/OrderList';
import PageTitle from '../components/PageTitle';

const Orders = () => {
  let content: React.ReactNode = '';
  const router = useRouter();
  const { user } = useAuthContext();
  const { mainColor } = useTheme();
  const { data: orderIds } = useSWR(
    () => user?.userId,
    async (id) => {
      const rs = await getOrderIds(id);
      return FireStoreParser(rs.fields.orders);
    }
  );
  const { error, data: orders } = useSWR(
    () => orderIds,
    (...orderIds: string[]) => getOrders(orderIds)
  );

  if (error) {
    content = "You don't have any orders yet";
  }

  if (!orders) {
    content = (
      <div style={{ textAlign: 'center' }}>
        <BeatLoader color={mainColor} />
      </div>
    );
  }

  if (orders) {
    content = <OrderList orders={orders} />;
  }

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
    return () => {};
  }, [router, user]);

  return (
    <AppContainer>
      <Divider x={100} />

      {orderIds?.length > 0 ? (
        <>
          <PageTitle>Your orders</PageTitle> {content}
        </>
      ) : (
        <>
          <PageTitle>{`You don't have any orders yet`}</PageTitle>
        </>
      )}
      <Divider x={100} />
    </AppContainer>
  );
};
export default Orders;
