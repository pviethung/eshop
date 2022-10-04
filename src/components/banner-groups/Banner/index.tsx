import Image from 'next/image';
import { useTheme } from 'styled-components';
import Button from '../../Button';
import { BannerContent, BannerDesc, BannerTitle, StyledBanner } from './style';

interface Banner {
  src: string;
  title: string;
  desc: string;
  width: number;
  height: number;
  btnStyle?: 'fill';
  hasBtn?: boolean;
}

const Banner = ({ banner }: { banner: Banner }) => {
  const { mainColor } = useTheme();
  return (
    <StyledBanner>
      <Image
        src={banner.src}
        alt=""
        width={banner.width}
        height={banner.height}
      />
      <BannerContent>
        <BannerTitle>{banner.title}</BannerTitle>
        {banner.desc !== '' && <BannerDesc>{banner.desc}</BannerDesc>}
        {banner.hasBtn === false ||
          (banner.btnStyle === 'fill' ? (
            <Button size="md" hoverBorder={mainColor} fill="true">
              Shop now
            </Button>
          ) : (
            <Button size="md" hoverBorder={mainColor}>
              Shop now
            </Button>
          ))}
      </BannerContent>
    </StyledBanner>
  );
};
export default Banner;
