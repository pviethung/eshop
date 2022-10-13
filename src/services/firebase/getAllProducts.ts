import { PAGE_SIZE } from './axiosInstance';
//@ts-ignore
import FireStoreParser from 'firestore-parser';
import { axiosInstance } from './axiosInstance';
export const getAllProducts = async () => {
  try {
    const rs = await axiosInstance({
      url: `products?pageSize=${PAGE_SIZE}`,
      method: 'GET',
    });

    return rs.data.documents.map((document: any) => {
      return FireStoreParser(document.fields);
    });
  } catch (err) {
    throw err;
  }
};
