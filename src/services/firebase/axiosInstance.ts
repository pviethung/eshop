import axios from 'axios';

const BASE_URL = `https://firestore.googleapis.com/v1/projects/eshop-657e0/databases/(default)/documents`;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
