import 'keen-slider/keen-slider.min.css';
import { AppProps } from 'next/app';
import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';
import Theme from '../components/Theme';
import { AuthContextProvider } from '../context/auth';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('myapp render');

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
