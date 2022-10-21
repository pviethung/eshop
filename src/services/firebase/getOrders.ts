import { axiosInstance } from './axiosInstance';
//@ts-ignore
import FireStoreParser from 'firestore-parser';

export const getOrders = async (orderIds: string[]) => {
  if (orderIds.length === 0) return [];
  try {
    const rs = await Promise.allSettled(
      orderIds.map((id) =>
        axiosInstance({
          url: `orders/${id}`,
        })
      )
    );

    const orders = rs.map((order) => {
      if (order.status === 'fulfilled') {
        const data = FireStoreParser(order.value.data.fields);
        return data;
      }
      return undefined;
    });

    return orders;
  } catch (err) {
    throw err;
  }
};
