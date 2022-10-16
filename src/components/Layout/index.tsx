import { Toaster } from 'react-hot-toast';
import { useTheme } from 'styled-components';
import Divider from '../Divider';
import Footer from '../Footer';
import Header from '../Header';
import NavBar from '../NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { mainColor } = useTheme();
  return (
    <>
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
    </>
  );
};
export default Layout;
