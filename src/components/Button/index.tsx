import { StyledButton } from './style';

export interface ButtonProps {
  fill?: 'true' | undefined;
  size: 'sm' | 'md' | 'lg';
  hoverBg?: string;
  hoverBorder?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  children,
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<any>) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
export default Button;
