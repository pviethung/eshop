import Link from 'next/link';
import { useTheme } from 'styled-components';
import { StyledButton } from '../Button/style';
import Divider from '../Divider';
import FormTitle from '../forms/FormTitle';
import FormWrap from '../forms/FormWrap';

const RegisterCTA = () => {
  const { mainColor } = useTheme();

  return (
    <FormWrap>
      <FormTitle>returning customer</FormTitle>
      <p>
        By creating an account with our store, you will be able to move through
        the checkout process faster, store multiple shipping addresses, view and
        track your orders in your account and more.
      </p>
      <Divider x={30} />
      <Link href={'/register'} passHref={true}>
        <StyledButton as={'a'} size="md" hoverBorder={mainColor} fill="true">
          create an account
        </StyledButton>
      </Link>
    </FormWrap>
  );
};
export default RegisterCTA;
