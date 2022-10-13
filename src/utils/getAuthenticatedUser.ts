import { User } from '../models';

export const getAuthenticatedUser = (): User | null => {
  let user: User | null = null;

  if (typeof localStorage !== 'undefined') {
    let localUser = localStorage.getItem('authUser');
    user = localUser ? JSON.parse(localUser) : null;
  }

  return user;
};
