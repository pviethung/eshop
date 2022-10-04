import InputField, { InputFieldProps } from '../InputField';
import * as Yup from 'yup';

const PasswordField = (props: InputFieldProps) => {
  const validate = (value: any) => {
    let errorMessage;
    const schema = Yup.string()
      .min(6, 'password at least 6 characters')
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
  return <InputField type="password" validate={validate} {...props} />;
};
export default PasswordField;
