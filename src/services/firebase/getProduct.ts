import { axiosInstance } from './axiosInstance';

export const getProduct = async (id: string) => {
  try {
    const rs = await axiosInstance({
      url: `products/${id}`,
    });

    return rs.data.fields;
  } catch (err) {
    throw err;
  }
};
