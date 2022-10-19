import { axiosInstance } from './axiosInstance';
//@ts-ignore
import FireStoreParser from 'firestore-parser';

export const getOrder = async (orderId: string) => {
  try {
    const rs = await axiosInstance({
      url: `orders/${orderId}`,
    });
    return FireStoreParser(rs.data.fields);
  } catch (err) {
    throw err;
  }
};
