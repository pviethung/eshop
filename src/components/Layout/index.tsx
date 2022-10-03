import Divider from '../Divider';
import Footer from '../Footer';
import Header from '../Header';
import NavBar from '../NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        <NavBar />
        {children}
      </main>
      <Divider x={30} />
      <Footer />
    </>
  );
};
export default Layout;
