import { axiosInstance } from './axiosInstance';

export const getComments = async (productId: string) => {
  try {
    const rs = await axiosInstance({
      url: `products/${productId}?mask.fieldPaths=reviews`,
    });

    return rs.data.fields.reviews;
  } catch (err) {
    throw err;
  }
};
