import axios from 'axios';
import { Form, Formik, FormikHelpers } from 'formik';
import { useTheme } from 'styled-components';
import { User } from '../../../models';
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
        method: 'POST',
        url: `/api/auth/login`,
        data: {
          email: values.email,
          password: values.password,
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
              loading={props.isSubmitting}
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
