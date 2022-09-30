import { AppProps } from 'next/app';
import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';
import Theme from '../components/Theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('render');

  return (
    <>
      <GlobalStyle />
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
}

export default MyApp;
