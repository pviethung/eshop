import { ButtonProps as StyledButtonProps, StyledButton } from './style';

interface ButtonProps extends StyledButtonProps {
  children: React.ReactNode;
}

const Button = ({
  children,
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<any>) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
export default Button;
