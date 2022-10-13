import { createContext, ReactNode, useReducer } from 'react';
import { Cart, CartLineItem } from '../../models';
import { getAuthenticatedUser } from '../../utils';
import { CartAction, CartState, CART_ACTIONS } from './types';

const user = getAuthenticatedUser();
const initialState: CartState = {
  cart: {
    itemCount: 0,
    items: [],
    totalPrice: 0,
    userId: user?.userId || null,
  },
  dispatch: () => {},
};

export const CartContext = createContext<CartState>(initialState);

const reduder = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_LINE_ITEM:
      const prevCart = state.cart;
      let { payload: newItem } = action;
      let foundItem = false;
      const newItems: CartLineItem[] = [];

      prevCart.items.forEach((item) => {
        const cloneItem = { ...item };
        if (cloneItem.id === newItem.id) {
          foundItem = true;
          cloneItem.quantity = cloneItem.quantity + newItem.quantity;
        }
        newItems.push(cloneItem);
      });

      if (!foundItem) newItems.push(newItem);

      const newCart: Cart = {
        userId: prevCart.userId,
        itemCount: prevCart.itemCount + newItem.quantity,
        items: newItems,
        totalPrice: prevCart.totalPrice + newItem.quantity * newItem.price,
      };
      return { ...state, cart: newCart };
    case CART_ACTIONS.USER_CHANGE:
      //TODOs handle persist cart
      return { ...state, cart: { ...state.cart, userId: action.payload } };

    default:
      return state;
  }
};

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reduder, initialState);

  console.log(state);

  // const cart = { ...state.cart, userId: user ? user.userId : null };

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
