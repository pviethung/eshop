import { axiosInstance } from './axiosInstance';

export const getUser = async (id: string, token: string) => {
  try {
    return await axiosInstance({
      url: `users/${id}`,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  } catch (err) {
    throw err;
  }
};
