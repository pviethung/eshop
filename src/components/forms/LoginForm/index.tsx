import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { AUTH_ACTIONS } from '../../../context/auth';
import { CART_ACTIONS } from '../../../context/cart/types';
import { useAuthContext, useCartContext, useToast } from '../../../hooks';
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

const LoginForm = () => {
  const router = useRouter();
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: cartDispatch } = useCartContext();
  const { showToast } = useToast('error');

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

  useEffect(() => {
    if (error) {
      setFormBody(null);
      showToast('Invalid email or password');
      return;
    }
    if (loggedUser) {
      authDispatch({
        type: AUTH_ACTIONS.LOGIN,
        payload: loggedUser,
      });

      cartDispatch({
        type: CART_ACTIONS.USER_LOGIN,
        payload: loggedUser.userId,
      });
      router.replace('/');
    }
  }, [showToast, error, loggedUser, router, authDispatch, cartDispatch]);

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
        {(props) => {
          return (
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
          );
        }}
      </Formik>
      {error && (
        <p style={{ color: 'red', marginTop: '20px' }}>
          Invalid email or password
        </p>
      )}
    </FormWrap>
  );
};
export default LoginForm;
