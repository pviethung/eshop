import { Cart } from './../models/Cart';
export const getCart = (userId?: string) => {
  if (typeof localStorage === 'undefined') return null;
  if (!userId) return null;

  const localCarts = localStorage.getItem('carts');
  const parsedCarts: { [key: string]: Cart } | null =
    localCarts && JSON.parse(localCarts);

  return parsedCarts && parsedCarts[userId] ? parsedCarts[userId] : null;
};
