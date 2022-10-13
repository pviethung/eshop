import { useContext } from 'react';
import { CartContext } from './../context/cart/Cart';
export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};
