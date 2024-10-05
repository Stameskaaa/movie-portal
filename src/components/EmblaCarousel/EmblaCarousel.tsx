import React, { ReactElement, useEffect } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './EmblaCarousel.module.scss';

type PropType = {
  slides: ReactElement[];
  options?: EmblaOptionsType;
  moreCards?: boolean;
};

export const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, moreCards } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: moreCards ? 25000 : 3000 }),
  ]);

  return (
    <section className={`${styles.embla} ${moreCards ? styles.adaptive : null} `}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((element, index) => (
            <div className={styles.embla__slide} key={index}>
              {element}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
