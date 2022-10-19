import * as Yup from 'yup';
import InputField, { InputFieldProps } from '../InputField';

const TextField = (props: InputFieldProps) => {
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
  return (
    <InputField
      type="text"
      validate={props.required ? validate : () => undefined}
      {...props}
    />
  );
};
export default TextField;
