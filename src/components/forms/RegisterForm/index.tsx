import { Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { AUTH_ACTIONS } from '../../../context/auth';
import { useAuthContext, useRegister } from '../../../hooks';
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
  const { dispatch } = useAuthContext();
  const [formBody, setFormBody] = useState<{
    email: string;
    password: string;
    displayName: string;
  } | null>(null);

  //TODOs handle submit error
  const { error, data: registeredUser } = useRegister(formBody);
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
    if (registeredUser) {
      dispatch({
        type: AUTH_ACTIONS.LOGIN,
        payload: registeredUser,
      });
      router.push('/');
      console.log('after push');
    }
  }, [registeredUser, router, dispatch]);

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
                loading={props.isSubmitting}
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
