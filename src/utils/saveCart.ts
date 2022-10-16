import { Cart } from '../models';

export const saveCart = (cart: Cart) => {
  if (typeof localStorage === 'undefined') return;
  if (!cart.userId) return;

  const localCarts = localStorage.getItem('carts');

  if (!localCarts)
    return localStorage.setItem(
      'carts',
      JSON.stringify({
        [cart.userId]: cart,
      })
    );

  const parsedCarts = JSON.parse(localCarts);
  parsedCarts[cart.userId] = cart;

  return localStorage.setItem('carts', JSON.stringify(parsedCarts));
};
