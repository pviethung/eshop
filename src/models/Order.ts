import { Cart } from './Cart';

export interface Order {
  address: string;
  cart: Cart;
  discount: number;
  name: string;
  note: string;
  orderId: string;
  shippingFee: number;
}
