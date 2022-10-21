import produce from 'immer';
import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { getAuthenticatedUser, getCart, saveCart } from '../../utils';

import { CartAction, CartState, CART_ACTIONS } from './types';

const initialState: CartState = {
  cart: {
    itemCount: 0,
    items: [],
    totalPrice: 0,
    userId: null,
  },
  dispatch: () => {},
};

export const CartContext = createContext<CartState>(initialState);

const reducer = produce((state: CartState, action: CartAction) => {
  const user = getAuthenticatedUser();
  const cart = getCart(user?.userId);

  switch (action.type) {
    case CART_ACTIONS.ADD_LINE_ITEM: {
      const { payload: newItem } = action;
      const foundIdx = state.cart.items.findIndex((i) => i.id === newItem.id);
      const items = state.cart.items;

      if (foundIdx !== -1) {
        const currentVariants = items[foundIdx].variants;
        const newVariants = newItem.variants;

        let pushNewItem = true;
        for (const newVariant in newVariants) {
          let newInCurrent = false;

          items[foundIdx].quantity += newVariants[newVariant];
          for (const currentVariant in currentVariants) {
            if (newVariant === currentVariant) {
              newInCurrent = true;
              currentVariants[currentVariant] += newVariants[newVariant];
              state.cart.itemCount += newVariants[newVariant];
              state.cart.totalPrice += newVariants[newVariant] * newItem.price;
              break;
            }
          }
          if (!newInCurrent) {
            currentVariants[newVariant] = newVariants[newVariant];
            state.cart.itemCount += newVariants[newVariant];
            state.cart.totalPrice += newVariants[newVariant] * newItem.price;
          }
        }
      } else {
        items.push({ ...newItem, quantity: 1 });
        state.cart.itemCount += 1;
        state.cart.totalPrice += newItem.price;
      }

      return state;
    }
    case CART_ACTIONS.DELETE_LINE_ITEM:
      let items = state.cart.items;
      const { productId, variantSize } = action.payload;

      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.id === productId) {
          for (const variant in item.variants) {
            if (variantSize === variant) {
              state.cart.itemCount -= item.variants[variant];
              state.cart.totalPrice -= item.variants[variant] * item.price;
              delete item.variants[variant];
            }
          }

          break;
        }
      }

      state.cart.items = items.filter((item) => {
        return JSON.stringify(item.variants) !== '{}';
      });

      return state;
    case CART_ACTIONS.CLEAR_CART:
      state.cart = {
        itemCount: 0,
        items: [],
        totalPrice: 0,
        userId: user?.userId || null,
      };

      return state;

    case CART_ACTIONS.USER_LOGIN:
      state.cart = cart || {
        itemCount: 0,
        items: [],
        totalPrice: 0,
        userId: user?.userId || null,
      };

      return state;

    case CART_ACTIONS.USER_LOGOUT:
    default:
      return state;
  }
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (state) => {
    const user = getAuthenticatedUser();
    const cart = getCart(user?.userId);
    return { ...state, cart: cart || state.cart };
  });

  useEffect(() => {
    saveCart(state.cart);
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
