import { createContext, ReactNode, useReducer } from 'react';
import { AuthAction, AuthState, AUTH_ACTIONS } from './types';

const initialState: AuthState = {
  user: null,
  dispatch: () => {},
};

export const AuthContext = createContext<AuthState>(initialState);

const reduder = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reduder, initialState);
  console.log('[Auth Context] ', state.user);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
