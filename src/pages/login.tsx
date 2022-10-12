import Divider from '../components/Divider';
import LoginForm from '../components/forms/LoginForm';
import { AppContainer } from '../components/GlobalStyle';
import Col from '../components/grid-layout/Col';
import Row from '../components/grid-layout/Row';
import PageTitle from '../components/PageTitle';
import RegisterCTA from '../components/RegisterCTA';

const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_TOKEN;

const Login = () => {
  return (
    <AppContainer>
      <Divider x={60} />
      <PageTitle>ALREADY REGISTERED?</PageTitle>
      <Row>
        <Col w={1 / 2}>
          <RegisterCTA />
        </Col>
        <Col w={1 / 2}>
          <LoginForm />
        </Col>
      </Row>
    </AppContainer>
  );
};
export default Login;
