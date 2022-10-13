import { Dispatch } from 'react';
import { Cart, CartLineItem } from '../../models';

export enum CART_ACTIONS {
  ADD_LINE_ITEM,
  DELETE_LINE_ITEM,
  CLEAR_CART,
  USER_CHANGE,
}

export interface AddCartAction {
  type: CART_ACTIONS.ADD_LINE_ITEM;
  payload: CartLineItem;
}
export interface DeleteCartAction {
  type: CART_ACTIONS.DELETE_LINE_ITEM;
}
export interface UserChange {
  type: CART_ACTIONS.USER_CHANGE;
  payload: string | null;
}
export type CartAction = AddCartAction | DeleteCartAction | UserChange;

export interface CartState {
  cart: Cart;
  dispatch: Dispatch<CartAction>;
}
