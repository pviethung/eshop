import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Divider from '../components/Divider';
import LoginForm from '../components/forms/LoginForm';
import { AppContainer } from '../components/GlobalStyle';
import Col from '../components/grid-layout/Col';
import Row from '../components/grid-layout/Row';
import PageTitle from '../components/PageTitle';
import RegisterCTA from '../components/RegisterCTA';
import { useAuthContext } from '../hooks';

const Login = () => {
  const { user } = useAuthContext();
  const { push } = useRouter();
  const [mouted, setMouted] = useState(false);

  useEffect(() => {
    if (!mouted) setMouted(true);
    if (user) {
      push('/');
    }
  }, [user, push, mouted]);

  if (!mouted) {
    return <></>;
  }

  return (
    <AppContainer>
      <Divider x={60} />
      <PageTitle>ALREADY REGISTERED?</PageTitle>
      <Row>
        <Col lg={1} w={1 / 2}>
          <RegisterCTA />
        </Col>
        <Col lg={1} w={1 / 2}>
          <LoginForm />
        </Col>
      </Row>
    </AppContainer>
  );
};
export default Login;
