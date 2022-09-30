import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

const Carousel = () => {
  const [ref] = useKeenSlider<HTMLDivElement>();
  return (
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <Image
          src="https://cdn.shopify.com/s/files/1/1473/1066/files/slider16.jpg?7588841157370907452"
          alt=""
          layout="responsive"
          width={2045}
          height={855}
        />
      </div>
      <div className="keen-slider__slide number-slide1">
        <Image
          src="https://cdn.shopify.com/s/files/1/1473/1066/files/slider17.jpg?7588841157370907452"
          alt=""
          layout="responsive"
          width={2045}
          height={855}
        />
      </div>
    </div>
  );
};
export default Carousel;
