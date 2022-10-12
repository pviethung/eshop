import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { AUTH_ACTIONS } from '../../../context/auth';
import { useAuthContext } from '../../../hooks';
import { useLogin } from '../../../hooks/useLogin';
import ButtonWithState from '../../ButtonWithState';
import Divider from '../../Divider';
import EmailField from '../EmailField';
import FormTitle from '../FormTitle';
import FormWrap from '../FormWrap';
import PasswordField from '../PasswordField';

//@ts-ignore
interface FormValues {
  email: string;
  password: string;
}

const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_TOKEN;

const LoginForm = () => {
  const router = useRouter();
  const { dispatch } = useAuthContext();
  const { mainColor } = useTheme();
  const [formBody, setFormBody] = useState<FormValues | null>(null);
  const initialValues: FormValues = {
    email: '',
    password: '',
  };
  const { data: loggedUser, error, isValidating } = useLogin(formBody);
  const handleSubmit = async (values: FormValues) => {
    setFormBody({
      email: values.email,
      password: values.password,
    });
  };

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (loggedUser) {
      dispatch({
        type: AUTH_ACTIONS.LOGIN,
        payload: loggedUser,
      });
      router.push('/');
    }
  }, [loggedUser, router, dispatch]);

  return (
    <FormWrap>
      <FormTitle>returning customer</FormTitle>

      <p>If you have an account with us, please log in.</p>

      <Divider x={30} />
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form noValidate>
            <EmailField
              label="Email address"
              required
              id="email"
              name="email"
            />
            <PasswordField
              label="Password"
              required
              name="password"
              id="password"
            />
            <ButtonWithState
              innerText="login"
              loading={isValidating}
              type="submit"
              hoverBorder={mainColor}
              size="md"
              fill="true"
            />
          </Form>
        )}
      </Formik>
    </FormWrap>
  );
};
export default LoginForm;
