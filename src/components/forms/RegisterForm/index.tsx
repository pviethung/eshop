import { Form, Formik } from 'formik';
import { Container } from './style';
import * as Yup from 'yup';
import Button from '../../Button';
import { useTheme } from 'styled-components';
import FormWrap from '../FormWrap';
import EmailField from '../EmailField';
import TextField from '../TextField';
import PasswordField from '../PasswordField';

const RegisterForm = () => {
  const { mainColor } = useTheme();

  return (
    <Container>
      <FormWrap>
        <Formik
          initialValues={{
            email: '',
            firstname: '',
            lastname: '',
            password: '',
          }}
          validateOnChange={false}
          onSubmit={(values, formik) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              formik.setSubmitting(false);
            }, 400);
          }}
        >
          {(formik) => (
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
              <Button
                type="submit"
                hoverBorder={mainColor}
                size="md"
                fill="true"
              >
                CREATE
              </Button>
            </Form>
          )}
        </Formik>
      </FormWrap>
    </Container>
  );
};
export default RegisterForm;
