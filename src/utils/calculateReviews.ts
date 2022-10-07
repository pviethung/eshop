import { Review } from './../models/Review';
export const calculateReviews = (reviews: Review[]) => {
  return (
    Math.round((reviews.reduce((x, y) => x + y.rate, 0) / reviews.length) * 2) /
      2 || 0
  );
};
