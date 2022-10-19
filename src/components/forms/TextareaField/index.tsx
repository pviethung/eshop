import { useField } from 'formik';
import * as Yup from 'yup';
import { InputFieldProps } from '../InputField';
import { StyledTextareaField } from './style';

const TextareaField = (props: InputFieldProps) => {
  const validate = (value: any) => {
    let errorMessage;
    const schema = Yup.string().required('This field is required.');

    return schema
      .validate(value)
      .then((value) => {
        return undefined;
      })
      .catch((error: Yup.ValidationError) => {
        return error.errors[0];
      });
  };
  const [field, meta] = useField({
    name: props.name,
    validate: props.required ? validate : () => undefined,
  });

  return (
    <StyledTextareaField error={meta.touched ? meta.error : undefined}>
      <label>
        {props.label}
        {props.required && <span> *</span>}
      </label>
      <textarea {...field} {...props} />
    </StyledTextareaField>
  );
};
export default TextareaField;
