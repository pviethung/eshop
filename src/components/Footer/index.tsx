import { Form, Formik } from 'formik';
import Logo from '../Logo';
import {
  Container,
  FooterCopyright,
  FooterLogo,
  FooterNewsLetter,
  NewsLetterTitle,
} from './style';
import * as Yup from 'yup';
import InputEmail from '../form-fields/InputEmail';
import Button from '../Button';
import { useTheme } from 'styled-components';
import { AppContainer } from '../GlobalStyle';

const Footer = () => {
  const { mainColor } = useTheme();
  return (
    <AppContainer>
      <Container>
        <FooterLogo>
          <Logo />
        </FooterLogo>
        <FooterNewsLetter>
          <NewsLetterTitle>newsletter signup</NewsLetterTitle>
          <Formik
            initialValues={{
              email: '',
            }}
            validateOnChange={false}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Invalid email address')
                .required('This field is required.'),
            })}
            onSubmit={(values, formik) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                formik.setSubmitting(false);
              }, 400);
            }}
          >
            {(formik) => (
              <Form noValidate>
                <InputEmail name="email" id="email" />
                <Button type="submit" hoverBorder={mainColor} size="md" fill>
                  SUBSCRIBE
                </Button>
              </Form>
            )}
          </Formik>
        </FooterNewsLetter>
        <FooterCopyright>
          <Logo />
          <span>© 2018. All Rights Reserved.</span>
        </FooterCopyright>
      </Container>
    </AppContainer>
  );
};
export default Footer;
