import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Container } from './style';

const ProductReviewStars = ({
  rating,
  interactive,
  onRate,
}: {
  rating: number;
  interactive: boolean;
  onRate?: (e: React.MouseEvent & { rating: number }) => void;
}) => {
  if (onRate) console.log(rating);

  return (
    <Container>
      <Rater
        onRate={onRate ? onRate : () => {}}
        rating={rating}
        total={5}
        interactive={interactive}
      />
    </Container>
  );
};
export default ProductReviewStars;
