import { Review } from './Review';
export interface Product {
  id: string;
  inventory_quantity: number;
  title: string;
  price: number;
  compare_at_price: number;
  vendor: string; // brand a, brand b, brand c,brand d
  type: string; // culotte,waistcoat, short,skirt, shirt, dress, legging, trouser, glasses accessory, jacket, sweater, bodysuit,blazer
  description: string; // Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
  sizes: string[]; // s, m, l, xl
  images: string[];
  tags: string[];
  // tags types
  // size:s, size:m, size:l
  // color:navy or black or white or gray or brown or red or green
  // gender:women or men, unisex
  //
  reviews: Review[];
}
/*
  id: string;
  rate: number;
  content: string;
  uid: string;
  displayName: string;
  createdAt: string;
 */
