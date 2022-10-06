import { AppProps } from 'next/app';
import { AuthContextProvider } from '../context/auth';
import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';
import Theme from '../components/Theme';
import '../styles/globals.css';
import 'keen-slider/keen-slider.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('render');

  return (
    <AuthContextProvider>
      <GlobalStyle />
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </AuthContextProvider>
  );
}

export default MyApp;
