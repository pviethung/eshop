import InputField, { InputFieldProps } from '../InputField';
import * as Yup from 'yup';

const EmailField = (props: InputFieldProps) => {
  const validate = (value: any) => {
    let errorMessage;
    const schema = Yup.string()
      .email('Invalid email address')
      .required('This field is required.');

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
