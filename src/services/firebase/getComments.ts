import { axiosInstance, CustomAxiosConfig } from './axiosInstance';

export const getComments = async (productId: string) => {
  try {
    const rs = await axiosInstance({
      url: `products/${productId}?mask.fieldPaths=reviews`,
      sendWithToken: true,
    } as CustomAxiosConfig);

    return rs.data.fields.reviews;
  } catch (err) {
    throw err;
  }
};
