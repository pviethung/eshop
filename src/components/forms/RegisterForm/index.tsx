import { Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { AUTH_ACTIONS } from '../../../context/auth';
import { CART_ACTIONS } from '../../../context/cart/types';
import { useAuthContext, useCartContext, useRegister } from '../../../hooks';
import ButtonWithState from '../../ButtonWithState';
import EmailField from '../EmailField';
import FormWrap from '../FormWrap';
import PasswordField from '../PasswordField';
import TextField from '../TextField';
import { Container } from './style';

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_TOKEN;
const RegisterForm = () => {
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: cartDispatch } = useCartContext();
  const [formBody, setFormBody] = useState<{
    email: string;
    password: string;
    displayName: string;
  } | null>(null);

  const { isValidating, error, data: registeredUser } = useRegister(formBody);
  const router = useRouter();
  const { mainColor } = useTheme();
  const initialValues: FormValues = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
  };
  const handleSubmit = async (
    values: FormValues,
    formik: FormikHelpers<FormValues>
  ) => {
    setFormBody({
      displayName: values.firstname,
      email: values.email,
      password: values.password,
    });
  };

  useEffect(() => {
    if (error) {
      setFormBody(null);
      return alert('Something went wrong');
    }
    if (registeredUser) {
      authDispatch({
        type: AUTH_ACTIONS.LOGIN,
        payload: registeredUser,
      });

      cartDispatch({
        type: CART_ACTIONS.USER_LOGIN,
        payload: registeredUser.userId,
      });

      router.push('/');
    }
  }, [error, registeredUser, router, authDispatch, cartDispatch]);

  return (
    <Container>
      <FormWrap>
        <Formik
          initialValues={initialValues}
          validateOnChange={false}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Form noValidate>
              <TextField
                label="First name"
                required
                name="firstname"
                id="firstname"
              />
              <TextField
                label="Last name"
                required
                name="lastname"
                id="lastname"
              />
              <EmailField label="Email" required id="email" name="email" />
              <PasswordField
                label="Password"
                required
                name="password"
                id="password"
              />
              <ButtonWithState
                loading={isValidating}
                innerText="CREATE"
                type="submit"
                hoverBorder={mainColor}
                size="md"
                fill="true"
              />
            </Form>
          )}
        </Formik>
      </FormWrap>
    </Container>
  );
};
export default RegisterForm;
