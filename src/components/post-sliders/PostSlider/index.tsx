import { useSlider } from '../../../hooks';
import PostCard from '../../PostCard';
import Arrow from '../../SliderArrow';
import SliderTitle from '../../SliderTitle';
import { Container, PostSliderHeader } from './style';

export interface PostProps {
  img: {
    src: string;
    width: number;
    height: number;
  };
  title: string;
  shortContent: string;
  author: string;
  createdAt: string;
}
const PostSlider = ({
  title,
  posts,
}: {
  title: string;
  posts: PostProps[];
}) => {
  const slidesPerView = 3;
  const { currentSlide, instanceRef, loaded, ref } = useSlider({
    slides: {
      perView: slidesPerView,
      spacing: 30,
    },
    breakpoints: {
      '(max-width: 992px)': {
        slides: { perView: 2, spacing: 30 },
      },
      '(max-width: 576px)': {
        slides: { perView: 1, spacing: 30 },
      },
    },
  });

  return (
    <Container>
      <PostSliderHeader>
        <SliderTitle>{title}</SliderTitle>
      </PostSliderHeader>
      <div ref={ref} className="keen-slider">
        {posts.map((post) => (
          <div key={post.img.src} className="keen-slider__slide">
            <PostCard {...post} />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            fillColor="#000"
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            fillColor="#000"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide + slidesPerView >=
              instanceRef.current.track.details.slides.length
            }
          />
        </>
      )}
    </Container>
  );
};
export default PostSlider;
