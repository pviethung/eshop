import { getAuthenticatedUser } from './getAuthenticatedUser';

export const deleteCart = () => {
  const user = getAuthenticatedUser();
  const localCarts = localStorage.getItem('carts');
  if (!user || !localCarts) return;

  const carts = JSON.parse(localCarts);
  carts[user.userId] = {};
};
