import { axiosInstance, CustomAxiosConfig } from './axiosInstance';
export const getOrderIds = async (userId: string) => {
  try {
    const rs = await axiosInstance({
      url: `users/${userId}?mask.fieldPaths=orders`,
      sendWithToken: true,
    } as CustomAxiosConfig);

    return rs.data;
  } catch (err) {
    throw err;
  }
};
