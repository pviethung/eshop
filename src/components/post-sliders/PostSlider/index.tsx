import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Container, PostSliderHeader } from './style';
import SliderTitle from '../../SliderTitle';
import PostCard from '../../PostCard';

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
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 30,
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
    </Container>
  );
};
export default PostSlider;
