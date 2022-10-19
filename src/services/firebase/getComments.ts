import { getAuthenticatedUser } from './../../utils/getAuthenticatedUser';
import { axiosInstance } from './axiosInstance';

export const getComments = async (productId: string) => {
  const user = getAuthenticatedUser();
  try {
    const rs = await axiosInstance({
      url: `products/${productId}?mask.fieldPaths=reviews`,
      headers: {
        'Authorization': `Bearer ${user?.idToken}`,
      },
    });

    return rs.data.fields.reviews;
  } catch (err) {
    throw err;
  }
};
