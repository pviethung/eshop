import { AppContainer } from '../../GlobalStyle';
import PostSlider, { PostProps } from '../PostSlider';

const POSTS: PostProps[] = [
  {
    img: {
      src: 'https://cdn.shopify.com/s/files/1/1473/1066/articles/07_1024x1024.jpg?v=1473780981',
      width: 1024,
      height: 780,
    },
    title: 'Mauris Lacinia Lectus',
    shortContent:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, nulla?',
    author: 'Admin',
    createdAt: 'Sun Oct 02 2022',
  },
  {
    img: {
      src: 'https://cdn.shopify.com/s/files/1/1473/1066/articles/06_1024x1024.jpg?v=1473780967',
      width: 1024,
      height: 780,
    },
    title: 'Mauris Lacinia Lectus',
    shortContent:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, nulla?',

    author: 'Admin',
    createdAt: 'Sun Oct 02 2022',
  },
  {
    img: {
      src: 'https://cdn.shopify.com/s/files/1/1473/1066/articles/05_1024x1024.jpg?v=1473780957',

      width: 1024,
      height: 780,
    },
    title: 'Mauris Lacinia Lectus',
    shortContent:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, nulla?',

    author: 'Admin',
    createdAt: 'Sun Oct 02 2022',
  },
  {
    img: {
      src: 'https://cdn.shopify.com/s/files/1/1473/1066/articles/04_1024x1024.jpg?v=1473780795',
      width: 1024,
      height: 780,
    },
    title: 'Mauris Lacinia Lectus',
    shortContent:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, nulla?',

    author: 'Admin',
    createdAt: 'Sun Oct 02 2022',
  },
];

const HomePost = () => {
  return (
    <AppContainer>
      <PostSlider title="recent posts" posts={POSTS} />
    </AppContainer>
  );
};
export default HomePost;
