import Banner from '../Banner';
import { Container } from './style';

const BANNERS: Banner[] = [
  {
    src: 'https://cdn.shopify.com/s/files/1/1473/1066/files/banner25.jpg?2425945735247005341',
    title: 'hats',
    desc: 'get up to 70%',
    width: 680,
    height: 570,
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/1473/1066/files/banner26.jpg?2425945735247005341',
    title: 'new collection',
    desc: 'of fashion clothes',
    width: 680,
    height: 570,
    btnStyle: 'fill',
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/1473/1066/files/banner27.jpg?2425945735247005341',
    title: '15% off',
    desc: 'on brand-new models',
    width: 680,
    height: 570,
  },
];

const HomeBanners1 = () => {
  return (
    <Container>
      {BANNERS.map((banner) => (
        <Banner key={banner.src} banner={banner} />
      ))}
    </Container>
  );
};
export default HomeBanners1;
