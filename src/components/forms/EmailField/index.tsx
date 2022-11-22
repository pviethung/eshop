import * as Yup from 'yup';
import InputField, { InputFieldProps } from '../InputField';

const EmailField = (props: InputFieldProps) => {
  const validate = (value: any) => {
    let errorMessage;
    let schema = Yup.string().email('Invalid email address');

    schema = props.required
      ? schema.required('This field is required.')
      : schema;

    return schema
      .validate(value)
      .then((value) => {
        return undefined;
      })
      .catch((error: Yup.ValidationError) => {
        return error.errors[0];
      });
  };
  return <InputField type="email" validate={validate} {...props} />;
};
export default EmailField;
