import { Product } from './../../models/Product';
export interface SortOption {
  value: string;
  label: string;
}

export type SortProperty = keyof Product;
export type SortOrder = 'asc' | 'desc';
