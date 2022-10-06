import axios from 'axios';
import { Form, Formik, FormikHelpers } from 'formik';
import { useTheme } from 'styled-components';
import { User } from '../../../models';
import Button from '../../Button';
import Divider from '../../Divider';
import EmailField from '../EmailField';
import FormTitle from '../FormTitle';
import FormWrap from '../FormWrap';
import PasswordField from '../PasswordField';

interface FormValues {
  email: string;
  password: string;
}
interface LoginFormProps {
  onLoginSuccess: (user: User) => void;
  onLoginError: (error: any) => void;
}

const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_TOKEN;

const LoginForm = ({ onLoginSuccess, onLoginError }: LoginFormProps) => {
  const { mainColor } = useTheme();
  const initialValues: FormValues = {
    email: '',
    password: '',
  };
  const handleSubmit = async (
    values: FormValues,
    formik: FormikHelpers<FormValues>
  ) => {
    try {
      const rs = await axios({
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: values.email,
          password: values.password,
          returnSecureToken: true,
        },
      });
      onLoginSuccess(rs.data);
    } catch (err) {
      onLoginError(err);
    }
  };

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
        <Form noValidate>
          <EmailField label="Email address" required id="email" name="email" />
          <PasswordField
            label="Password"
            required
            name="password"
            id="password"
          />
          <Button type="submit" hoverBorder={mainColor} size="md" fill="true">
            Login
          </Button>
        </Form>
      </Formik>
    </FormWrap>
  );
};
export default LoginForm;
