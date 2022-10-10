import type { NextPage } from 'next';
import HomeBanners1 from '../components/banner-groups/HomeBanners1';
import HomeBanners2 from '../components/banner-groups/HomeBanners2';
import HomeBanners3 from '../components/banner-groups/HomeBanners3';
import Carousel from '../components/Carousel';
import Divider from '../components/Divider';
import HomeBrands from '../components/image-sliders/HomeBrands';
import HomePost from '../components/post-sliders/HomePosts';
import HomeFeatured from '../components/product-sliders/HomeFeaturedProducts';
import HomeNew from '../components/product-sliders/HomeNewProducts';
import { useAuthContext } from '../hooks';

// import Head from 'next/head';
// import Image from 'next/image';

const Home: NextPage = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Divider x={40} />
      <Carousel />
      <HomeBanners1 />
      <Divider x={60} />
      <HomeFeatured />

      <HomeBanners2 />
      <Divider x={60} />
      <HomeNew />
      <HomeBrands />
      <Divider x={60} />
      <HomePost />
      <Divider x={60} />
      <HomeBanners3 />
    </>
  );
};

export default Home;
