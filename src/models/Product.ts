import { Review } from './Review';
export interface Product {
  id: string;
  inventory_quantity: number;
  title: string;
  price: number;
  compare_at_price: number;
  vendor: string;
  type: string;
  description: string;
  sizes: string[];
  images: string[];
  tags: string[];
  reviews: Review[];
}
