import { axiosInstance } from './axiosInstance';

export const getCollection = async (collectionId: string) => {
  try {
    const rs = await axiosInstance({
      url: `collections/${collectionId}`,
      method: 'GET',
    });

    return rs.data.fields;
  } catch (err) {
    throw err;
  }
};
