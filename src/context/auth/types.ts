import { Dispatch } from 'react';
import { User } from '../../models';

export enum AUTH_ACTIONS {
  SIGNUP = 'signup',
  LOGIN = 'login',
  LOGOUT = 'logout',
}

export interface LoginAction {
  type: AUTH_ACTIONS.LOGIN;
  payload: User;
}
export interface LogoutAction {
  type: AUTH_ACTIONS.LOGOUT;
}
export type AuthAction = LoginAction | LogoutAction;
export interface AuthState {
  user: User | null;
  dispatch: Dispatch<AuthAction>;
}
