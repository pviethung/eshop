import Banner from '../Banner';
import { Container } from './style';

const BANNERS: Banner[] = [
  {
    src: 'https://cdn.shopify.com/s/files/1/1473/1066/files/banner28.jpg?2425945735247005341',
    title: 'Buy 2 items',
    desc: 'get one for free!',
    width: 2048,
    height: 570,
    btnStyle: 'fill',
  },
];

const HomeBanners2 = () => {
  return (
    <Container>
      {BANNERS.map((banner) => (
        <Banner key={banner.src} banner={banner} />
      ))}
    </Container>
  );
};
export default HomeBanners2;
