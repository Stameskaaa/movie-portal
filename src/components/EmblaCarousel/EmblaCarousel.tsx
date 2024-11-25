import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './EmblaCarousel.module.scss';
import { FilmData } from '../../types/apiTypes';
import { MainCard } from '../MainCard/MainCard';
import { SmallSliderCard } from '../SmallSliderCard/SmallSliderCard';
import { withPopUp } from '../../HOC/WithPopUp/withPopUp';

type PropType = {
  slides: FilmData[];
  options?: EmblaOptionsType;
  multipleSlides?: boolean;
};

const WithPopUp = withPopUp(SmallSliderCard);

export const EmblaCarousel: React.FC<PropType> = ({ slides, options, multipleSlides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: multipleSlides ? 25000 : 3000 }),
  ]);

  return (
    <section className={`${styles.embla} ${multipleSlides ? styles.adaptive : null} `}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((movie, index) => (
            <div className={styles.embla__slide} key={index}>
              {multipleSlides ? (
                <WithPopUp
                  id={movie.genres && movie.kinopoiskId}
                  type={movie.type}
                  year={movie.year}
                  title={movie.nameOriginal ? movie.nameOriginal : movie.nameRu}
                  img={movie.posterUrl}
                />
              ) : (
                <MainCard id={movie?.kinopoiskId} img={movie.posterUrl} title={movie.nameRu} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
