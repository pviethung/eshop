import axios from 'axios';
import { Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';
import Button from '../../Button';
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
    try {
      // signup
      const { data } = await axios({
        method: 'POST',
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          email: values.email,
          password: values.password,
          returnSecureToken: true,
        }),
      });

      // update displayname
      await axios({
        method: 'POST',
        url: `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          idToken: data.idToken,
          displayName: values.firstname,
          returnSecureToken: true,
        }),
      });

      // update user db
      await axios({
        method: 'POST',
        url: `https://firestore.googleapis.com/v1/projects/eshop-657e0/databases/(default)/documents/users?documentId=${data.localId}`,
        data: {
          'fields': {
            'id': {
              'stringValue': data.localId,
            },
            'first_name': {
              'stringValue': values.firstname,
            },
            'last_name': {
              'stringValue': values.lastname,
            },
            'email': {
              'stringValue': values.email,
            },
            // 'test': {
            //   'arrayValue': {
            //     'values': [{ 'stringValue': '13' }, { 'stringValue': '456' }],
            //   },
            // },
          },
        },
      });

      router.push('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <FormWrap>
        <Formik
          initialValues={initialValues}
          validateOnChange={false}
          onSubmit={handleSubmit}
        >
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
            <Button type="submit" hoverBorder={mainColor} size="md" fill="true">
              CREATE
            </Button>
          </Form>
        </Formik>
      </FormWrap>
    </Container>
  );
};
export default RegisterForm;
