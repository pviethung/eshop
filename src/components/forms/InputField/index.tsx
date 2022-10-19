import { Field, useField } from 'formik';
import { Container, Label, StyledField } from './style';

export interface InputFieldProps {
  type?: string;
  name: string;
  id: string;
  label?: string;
  required?: boolean;
}

const InputField = (
  props: InputFieldProps & {
    validate: (value: any) => Promise<string | undefined> | undefined;
  }
) => {
  const [_, meta] = useField({
    name: props.name,
    validate: props.validate,
  });

  return (
    <Container>
      {props.label && (
        <Label>
          {props.label} {props.required && <span>*</span>}
        </Label>
      )}
      <StyledField error={meta.touched ? meta.error : undefined}>
        <Field type={props.type || 'text'} {...props} />
      </StyledField>
    </Container>
  );
};
export default InputField;
