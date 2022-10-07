import axios from 'axios';
import { BASE_URL } from './baseUrl';

//@ts-ignore
import FireStoreParser from 'firestore-parser';

export const getProduct = async (id: string) => {
  try {
    const rs = await axios({
      url: `${BASE_URL}/products/${id}`,
      method: 'GET',
    });

    console.log('[FireStoreParser of getProduct()]', FireStoreParser);

    return FireStoreParser(rs.data.fields);
  } catch (err) {
    throw err;
  }
};
