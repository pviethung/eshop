import type { NextPage } from 'next';
import Carousel from '../components/Carousel';
import Divider from '../components/Divider';
import Layout from '../components/Layout';
// import Head from 'next/head';
// import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Divider x={40} />
      <Carousel />
    </>
  );
};

export default Home;
