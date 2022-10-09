//@ts-ignore
import FireStoreParser from 'firestore-parser';
import { axiosInstance } from './axiosInstance';

//{document_path}?updateMask.fieldPaths=status&updateMask.fieldPaths=title

export const getProductIds = async () => {
  try {
    const rs = await axiosInstance({
      url: `products?mask.fieldPaths=id&pageSize=50`,
      method: 'GET',
    });

    return rs.data?.documents.map((document: any) =>
      FireStoreParser(document.fields)
    );
  } catch (err) {
    throw err;
  }
};
