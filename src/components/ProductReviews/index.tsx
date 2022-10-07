import { Review } from '../../models/Review';
import { CommentItem, CommentList, Container } from './style';

const ProductReviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <>
      {reviews.length > 0 && (
        <Container>
          <CommentList>
            {reviews.map((review) => (
              <CommentItem key={review.id}>{review.content}</CommentItem>
            ))}
          </CommentList>

          {/* comment form  */}
        </Container>
      )}
    </>
  );
};
export default ProductReviews;
