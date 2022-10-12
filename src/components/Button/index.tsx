import { StyledButton } from './style';

export interface ButtonProps {
  fill?: 'true' | undefined;
  size: 'sm' | 'md' | 'lg';
  hoverBg?: string;
  hoverBorder?: string;
  children: React.ReactNode;
  disabled?: boolean;
  as?: string | React.ComponentType<any>;
}

const Button = ({
  children,
  as,
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<any>) => {
  return (
    <StyledButton as={as} {...rest}>
      {children}
    </StyledButton>
  );
};
export default Button;
