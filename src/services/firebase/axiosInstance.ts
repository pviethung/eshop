import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { getAuthenticatedUser } from './../../utils/getAuthenticatedUser';
import { refreshToken as refreshTokenFn } from './refreshToken';

export const PAGE_SIZE = 50;
const BASE_URL = `https://firestore.googleapis.com/v1/projects/eshop-657e0/databases/(default)/documents`;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
export interface CustomAxiosConfig extends AxiosRequestConfig {
  sendWithToken?: boolean;
}

axiosInstance.interceptors.request.use(
  (config: CustomAxiosConfig) => {
    if (
      (config.method &&
        ['put', 'patch', 'post'].includes(config.method.toLocaleLowerCase())) ||
      config.sendWithToken
    ) {
      const user = getAuthenticatedUser();
      if (user)
        config.headers = {
          'Authorization': `Bearer ${user.idToken}`,
        };
    }
    return config;
  },
  (err) => Promise.reject(err)
);
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      // refresh token

      const user = getAuthenticatedUser();
      if (!user) return Promise.reject(error);

      try {
        const rs = await refreshTokenFn();
        if (!rs) return Promise.reject(error);
        const { idToken, refreshToken } = rs;
        localStorage.setItem(
          'authUser',
          JSON.stringify({ ...user, idToken, refreshToken })
        );
        return axiosInstance(error.response.config);
      } catch (err) {
        localStorage.removeItem('authUser');
        location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
