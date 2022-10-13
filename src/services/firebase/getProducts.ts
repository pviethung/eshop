import { axiosInstance, PAGE_SIZE } from './axiosInstance';
//@ts-ignore
import FireStoreParser from 'firestore-parser';
import { Product } from '../../models';

export const getProducts = async (productIds: string[]) => {
  try {
    const rs = await axiosInstance({
      url: `products?pageSize=${PAGE_SIZE}`,
      method: 'GET',
    });

    const totalProducts = rs.data.documents.map((document: any) => {
      return FireStoreParser(document.fields);
    });

    return totalProducts.filter((product: Product) => {
      return productIds.includes(product.id);
    });
  } catch (err) {
    throw err;
  }
};
