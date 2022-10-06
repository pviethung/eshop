import Divider from '../components/Divider';
import RegisterForm from '../components/forms/RegisterForm';
import PageTitle from '../components/PageTitle';

const Register = () => {
  return (
    <>
      <Divider x={60} />
      <PageTitle>create an account</PageTitle>
      <RegisterForm />;
    </>
  );
};
export default Register;
