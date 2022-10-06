import axios from 'axios';
import Divider from '../components/Divider';
import LoginForm from '../components/forms/LoginForm';
import { AppContainer } from '../components/GlobalStyle';
import Col from '../components/grid-layout/Col';
import Row from '../components/grid-layout/Row';
import PageTitle from '../components/PageTitle';
import RegisterCTA from '../components/RegisterCTA';
import { AUTH_ACTIONS } from '../context/auth';
import { useAuthContext } from '../hooks';

import { User } from '../models';

const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_TOKEN;

const Login = () => {
  const { dispatch } = useAuthContext();

  const handleSuccess = (user: User) => {
    console.log('[login page] logged user: ', user);
    dispatch({
      type: AUTH_ACTIONS.LOGIN,
      payload: user,
    });

    axios({
      method: 'GET',
      url: `https://firestore.googleapis.com/v1/projects/eshop-657e0/databases/(default)/documents/users/${user.localId}`,
      headers: {
        'Authorization': `Bearer ${user.idToken}`,
      },
    }).then((data) => {
      console.log(data);
    });

    // TODOs
    // navigate to somewhere
  };
  const handleError = (error: any) => {
    console.log(error);
  };

  return (
    <AppContainer>
      <Divider x={60} />
      <PageTitle>ALREADY REGISTERED?</PageTitle>
      <Row>
        <Col w={1 / 2}>
          <RegisterCTA />
        </Col>
        <Col w={1 / 2}>
          <LoginForm
            onLoginSuccess={handleSuccess}
            onLoginError={handleError}
          />
        </Col>
      </Row>
    </AppContainer>
  );
};
export default Login;
