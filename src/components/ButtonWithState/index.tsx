import { ButtonHTMLAttributes } from 'react';
import { BeatLoader } from 'react-spinners';
import { useTheme } from 'styled-components';
import Button, { ButtonProps } from '../Button';

interface ComponentProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<ButtonProps, 'children'> {
  loading: boolean;
  innerText: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const ButtonWithState = ({ loading, innerText, ...rest }: ComponentProps) => {
  const { mainColor } = useTheme();
  return (
    <Button disabled={loading} {...rest}>
      {loading ? (
        <div className="loading-spinner">
          <BeatLoader color={mainColor} />
        </div>
      ) : (
        innerText
      )}
    </Button>
  );
};
export default ButtonWithState;
