import { Container, PostSliderHeader } from './style';
import SliderTitle from '../../SliderTitle';
import PostCard from '../../PostCard';
import useSlider from '../../../hooks/useSlider';
import Arrow from '../../SliderArrow';

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
  const { currentSlide, instanceRef, loaded, ref } = useSlider({
    slides: {
      perView: 3,
      spacing: 30,
    },
    slideChanged(s) {
      console.log('changed');
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
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </Container>
  );
};
export default PostSlider;
