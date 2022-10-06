import styled, { useTheme } from 'styled-components';
import Button from '../Button';
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
      <Button size="md" hoverBorder={mainColor} fill="true">
        create an account
      </Button>
    </FormWrap>
  );
};
export default RegisterCTA;
