import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Container } from './style';

const ProductReviewStars = ({
  rating,
  interactive,
}: {
  rating: number;
  interactive: boolean;
}) => {
  return (
    <Container>
      <Rater rating={rating} total={5} interactive={interactive} />
    </Container>
  );
};
export default ProductReviewStars;
