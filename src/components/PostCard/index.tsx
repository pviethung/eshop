import Image from 'next/image';
import { PostProps } from '../post-sliders/PostSlider';
import {
  Container,
  PostAuthor,
  PostContent,
  PostCreatedAt,
  PostImage,
  PostTitle,
} from './style';

const PostCard = ({
  author,
  shortContent,
  createdAt,
  img,
  title,
}: PostProps) => {
  return (
    <Container>
      <PostImage href="/">
        <Image
          src={img.src}
          width={img.width}
          height={img.height}
          alt={title}
        />
        <PostCreatedAt>
          <span>{createdAt.split(' ')[2]}</span>
          <span>{createdAt.split(' ')[1]}</span>
        </PostCreatedAt>
      </PostImage>
      <PostTitle href="/">{title}</PostTitle>
      <PostAuthor>
        by <span>{author}</span>
      </PostAuthor>
      <PostContent>{shortContent}</PostContent>
    </Container>
  );
};
export default PostCard;
