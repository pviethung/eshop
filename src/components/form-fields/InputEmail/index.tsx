import { useField } from 'formik';
import FormField from '../FormField';

interface InputEmailProps {
  name: string;
  id: string;
}

const InputEmail = (props: InputEmailProps) => {
  const [field, meta] = useField(props.name);

  return (
    <FormField error={meta.error}>
      <input type="email" {...field} {...props} />
    </FormField>
  );
  /* {meta.error && meta.touched && <div>{meta.error}</div>} */
};
export default InputEmail;
