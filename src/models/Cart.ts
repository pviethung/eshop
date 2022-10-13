import { CartLineItem } from './CartLineItem';
export interface Cart {
  itemCount: number;
  items: CartLineItem[];
  totalPrice: number;
  userId: string | null;
  // TODO note?
}
