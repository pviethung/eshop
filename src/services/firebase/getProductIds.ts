import axios from 'axios';
import { BASE_URL } from './baseUrl';
//@ts-ignore
import FireStoreParser from 'firestore-parser';

//{document_path}?updateMask.fieldPaths=status&updateMask.fieldPaths=title

export const getProductIds = async () => {
  try {
    const rs = await axios({
      url: `${BASE_URL}/products?mask.fieldPaths=id`,
      method: 'GET',
    });

    console.log('[FireStoreParser of getProductIds()]', FireStoreParser);

    // return rs.data?.documents;
  } catch (err) {
    throw err;
  }
};
