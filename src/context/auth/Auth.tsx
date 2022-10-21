import { createContext, ReactNode, useReducer } from 'react';
import { getAuthenticatedUser } from '../../utils';
import { AuthAction, AuthState, AUTH_ACTIONS } from './types';

const initialState: AuthState = {
  user: null,
  dispatch: () => {},
};

export const AuthContext = createContext<AuthState>(initialState);

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

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
