import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useTheme } from 'styled-components';
import { useMediaQuery } from '../../hooks';
import ChangeColorScheme from '../ChangeColorScheme';
import Divider from '../Divider';
import Footer from '../Footer';
import Header from '../Header';
import NavBar from '../NavBar';

const MobileBurger = dynamic(() => import('../BurgerMenu'));

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { mainColor } = useTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [mouted, setMouted] = useState(false);

  useEffect(() => {
    setMouted(true);
  }, []);

  return (
    <>
      {mouted && isMobile && <MobileBurger />}

      <Header />
      <main>
        <NavBar />
        {children}
      </main>
      <Divider x={30} />
      <Footer />
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: mainColor,
              secondary: '#fff',
            },
          },
        }}
      />
      <ChangeColorScheme />
    </>
  );
};
export default Layout;
