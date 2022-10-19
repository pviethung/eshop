import { Order } from './Order';
export interface User {
  displayName: string;
  email: string;
  idToken: string;
  userId: string;
  refreshToken: string;
  orders: Order[];
}
