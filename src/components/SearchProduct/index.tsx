import { useTransition } from '@react-spring/web';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from 'styled-components';
import { Container, DesktopSearch } from './style';

import { useRouter } from 'next/router';
import { MdOutlineClear } from 'react-icons/md';
import { useMediaQuery } from '../../hooks';
import Search from './Search';

//TODOs  reset query on page change
const SearchProduct = ({ children }: { children?: React.ReactNode }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { mainColor } = useTheme();
  const { asPath } = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      setShow(false);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  const transitions = useTransition(show, {
    from: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 20 },
    delay: 200,
  });

  return (
    <Container
      onClick={(e) => {
        setShow(true);
      }}
    >
      {children}
      {transitions(
        (styles, item) =>
          item &&
          createPortal(
            <DesktopSearch style={styles}>
              <Search />
              <MdOutlineClear
                onClick={(e) => {
                  e.stopPropagation();
                  setShow(false);
                }}
                fontSize={30}
                color={mainColor}
              />
            </DesktopSearch>,
            document.querySelector('#app-portal') as HTMLElement
          )
      )}
    </Container>
  );
};
export default SearchProduct;
