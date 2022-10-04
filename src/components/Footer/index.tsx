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
import Button from '../Button';
import { useTheme } from 'styled-components';
import { AppContainer } from '../GlobalStyle';
import EmailField from '../forms/EmailField';

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
            onSubmit={(values, formik) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                formik.setSubmitting(false);
              }, 400);
            }}
          >
            {(formik) => (
              <Form noValidate>
                <EmailField name="email" id="email" />
                <Button
                  type="submit"
                  hoverBorder={mainColor}
                  size="md"
                  fill="true"
                >
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
