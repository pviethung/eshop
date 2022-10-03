import { StyledField } from './style';

const FormField = ({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: string | undefined;
}) => {
  return <StyledField error={error}>{children}</StyledField>;
};
export default FormField;
