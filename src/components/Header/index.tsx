import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsHandbag, BsPerson, BsSearch } from 'react-icons/bs';
import { AUTH_ACTIONS } from '../../context/auth';
import { useAuthContext } from '../../hooks';
import { AppContainer } from '../GlobalStyle';
import Logo from '../Logo';
import { ActionItem, Actions, Popover, StyledHeader } from './style';

const Header = () => {
  const { user, dispatch } = useAuthContext();
  const [mouted, setMouted] = useState(false);

  useEffect(() => {
    setMouted(true);
  }, []);

  return (
    <AppContainer>
      <StyledHeader>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <Actions>
          <ActionItem>
            <BsSearch />
          </ActionItem>
          <ActionItem width={28}>
            <BsPerson />

            <Popover>
              {user && mouted && (
                <>
                  <p>
                    Hello, <span>{user.displayName}</span>
                  </p>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({
                        type: AUTH_ACTIONS.LOGOUT,
                      });
                    }}
                  >
                    Log out
                  </a>
                </>
              )}
              {!user && mouted && (
                <Link href="/login">
                  <a>Login</a>
                </Link>
              )}
            </Popover>
          </ActionItem>
          <ActionItem>
            <BsHandbag />
          </ActionItem>
        </Actions>
      </StyledHeader>
    </AppContainer>
  );
};
export default Header;
