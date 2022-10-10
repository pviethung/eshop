import { createContext, ReactNode, useReducer } from 'react';
import { User } from '../../models';
import { AuthAction, AuthState, AUTH_ACTIONS } from './types';

const initialState: AuthState = {
  user: null,
  dispatch: () => {},
};

export const AuthContext = createContext<AuthState>(initialState);

export const getAuthenticatedUser = (): User | null => {
  let user: User | null = null;

  if (typeof localStorage !== 'undefined') {
    let localUser = localStorage.getItem('authUser');
    user = localUser ? JSON.parse(localUser) : null;
  }

  return user;
};

const reduder = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      localStorage.setItem('authUser', JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case AUTH_ACTIONS.LOGOUT:
      localStorage.removeItem('authUser');
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    reduder,
    initialState,
    (state: AuthState) => ({
      ...state,
      user: getAuthenticatedUser(),
    })
  );

  // console.log('[Auth user] ', state.user);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
