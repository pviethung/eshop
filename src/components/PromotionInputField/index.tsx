import { useState } from 'react';
import { useTheme } from 'styled-components';
import Button from '../Button';
import { Container, Hint, InputWrap, Success } from './style';

const CODES = {
  'HEREISYOURCODE': {
    type: 1,
    value: 30,
  },
  'HEREISANOTHER': {
    type: 2,
    value: 50,
  },
};
const PromotionInputField = ({
  totalPrice,
  onSubmit,
}: {
  totalPrice: number;
  onSubmit: (value: number, error?: string) => void;
}) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState('');

  const { mainColor } = useTheme();
  const handleSubmit = () => {
    setError(false);
    setSuccess('');
    const promoObj = CODES[value as keyof typeof CODES];
    if (typeof promoObj == 'undefined') {
      setError(true);
      onSubmit(0, 'Invalid code');
      return;
    }

    setSuccess(value);
    setValue('');

    if (promoObj.type === 1) {
      onSubmit(promoObj.value);
      return;
    }

    onSubmit((totalPrice * promoObj.value) / 100);
  };

  return (
    <Container>
      <InputWrap error={error}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button
          size="sm"
          fill="true"
          hoverBg="#fff"
          hoverBorder={mainColor}
          type="button"
          onClick={handleSubmit}
        >
          Get
        </Button>
      </InputWrap>
      {success !== '' && (
        <Success
          onClick={(e) => {
            setSuccess('');
            onSubmit(0);
          }}
        >
          {success} <span>✕</span>
        </Success>
      )}
      <Hint>
        <p>* HEREISYOURCODE or HEREISANOTHER</p>
      </Hint>
    </Container>
  );
};
export default PromotionInputField;
