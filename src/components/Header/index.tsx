import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsHandbag, BsPerson, BsSearch } from 'react-icons/bs';
import { AUTH_ACTIONS } from '../../context/auth';
import { CART_ACTIONS } from '../../context/cart/types';
import { useAuthContext, useCartContext } from '../../hooks';
import Logo from '../Logo';
import SearchProduct from '../SearchProduct';
import Search from '../SearchProduct/Search';
import {
  ActionItem,
  Actions,
  MobileSearch,
  Popover,
  StyledHeader,
} from './style';

const Header = () => {
  const { user, dispatch: authDispatch } = useAuthContext();
  const { dispatch: cartDispatch, cart } = useCartContext();
  const [mouted, setMouted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMouted(true);
  }, []);

  return (
    <StyledHeader>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Actions>
        <ActionItem>
          <SearchProduct>
            <BsSearch />
          </SearchProduct>
        </ActionItem>
        <ActionItem width={28}>
          <BsPerson />

          <Popover>
            {user && mouted && (
              <>
                <p>
                  Hello, <span>{user.displayName}</span>
                </p>
                <Link href="/orders">
                  <a>Your orders</a>
                </Link>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    cartDispatch({
                      type: CART_ACTIONS.USER_LOGOUT,
                    });
                    authDispatch({
                      type: AUTH_ACTIONS.LOGOUT,
                    });
                    router.replace('/');
                  }}
                >
                  Log out
                </a>
              </>
            )}
            {!user && mouted && (
              <>
                <Link href="/login">
                  <a>Login</a>
                </Link>
                <Link href="/register">
                  <a>Register</a>
                </Link>
              </>
            )}
          </Popover>
        </ActionItem>
        <ActionItem>
          <Link href="/cart">
            <a>
              <BsHandbag />
              {mouted && cart.itemCount > 0 && (
                <span>{cart.itemCount < 99 ? cart.itemCount : '99+'}</span>
              )}
            </a>
          </Link>
        </ActionItem>
      </Actions>
      <MobileSearch>
        <Search />
      </MobileSearch>
    </StyledHeader>
  );
};
export default Header;
