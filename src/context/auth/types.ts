import { Dispatch } from 'react';

export enum AUTH_ACTIONS {
  SIGNUP = 'signup',
  LOGIN = 'login',
  LOGOUT = 'logout',
}
export interface User {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
}
export interface LoginAction {
  type: AUTH_ACTIONS.LOGIN;
  payload: User;
}
export type AuthAction = LoginAction;
export interface AuthState {
  user: User | null;
  dispatch: Dispatch<AuthAction>;
}
