import { Dispatch } from 'react';
import { Cart, CartLineItem } from '../../models';

export enum CART_ACTIONS {
  ADD_LINE_ITEM,
  DELETE_LINE_ITEM,
  CLEAR_CART,
  USER_LOGIN,
  USER_LOGOUT,
}

export interface AddCartAction {
  type: CART_ACTIONS.ADD_LINE_ITEM;
  payload: Omit<CartLineItem, 'quantity'>;
}
export interface DeleteCartAction {
  type: CART_ACTIONS.DELETE_LINE_ITEM;
  payload: {
    productId: string;
    variantSize: string;
  };
}
export interface ClearCartAction {
  type: CART_ACTIONS.CLEAR_CART;
}

export interface UserLogin {
  type: CART_ACTIONS.USER_LOGIN;
  payload: string;
}
export interface UserLogout {
  type: CART_ACTIONS.USER_LOGOUT;
}
export type CartAction =
  | AddCartAction
  | DeleteCartAction
  | ClearCartAction
  | UserLogin
  | UserLogout;

export interface CartState {
  cart: Cart;
  dispatch: Dispatch<CartAction>;
}
