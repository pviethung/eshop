import axios from 'axios';
import { getAuthenticatedUser } from './../../utils/getAuthenticatedUser';

interface ResponseType {}

export const refreshToken = async (): Promise<{
  idToken: string;
  refreshToken: string;
} | null> => {
  const user = getAuthenticatedUser();
  if (!user) return null;
  try {
    const rs = await axios({
      method: 'POST',
      url: '/api/auth/refresh-tokenn',
      data: {
        refreshToken: user.refreshToken,
      },
    });
    console.log(rs.data);
    return rs.data;
  } catch (err) {
    throw err;
  }
};
