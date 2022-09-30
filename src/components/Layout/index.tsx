import Header from '../Header';
import NavBar from '../NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <div>Footer go here</div>
    </>
  );
};
export default Layout;
