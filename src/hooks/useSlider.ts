import { KeenSliderInstance, KeenSliderOptions } from 'keen-slider';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

interface SliderHookProps {}

const useSlider = (options?: KeenSliderOptions) => {
  const { slideChanged, created, ...customConfig } = options || {};
  const defaultConfig = {
    loop: false,
    slideChanged(slider: KeenSliderInstance) {
      setCurrentSlide(slider.track.details.rel);
      if (slideChanged) slideChanged(slider);
    },
    created(slider: KeenSliderInstance) {
      setLoaded(true);
      if (created) created(slider);
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    ...defaultConfig,
    ...customConfig,
  });

  return { currentSlide, loaded, ref, instanceRef };
};
export default useSlider;
