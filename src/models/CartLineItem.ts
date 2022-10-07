import { Product } from './Product';
export interface CartLineItem extends Product {
  quantity: number;
}
