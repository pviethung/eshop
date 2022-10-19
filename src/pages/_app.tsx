import 'keen-slider/keen-slider.min.css';
import { AppProps } from 'next/app';
import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';
import Theme from '../components/Theme';
import { AuthContextProvider } from '../context/auth';
import { CartContextProvider } from '../context/cart';
import '../styles/globals.css';

//TODO seo head
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <GlobalStyle />
        <Theme>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <div id="app-portal"></div>
        </Theme>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
