import useEmblaCarousel from 'embla-carousel-react';
import styles from './SimpleSmallSwiper.module.scss';
import { SmallSliderCard } from '../SmallSliderCard/SmallSliderCard';
import { EmblaOptionsType } from 'embla-carousel';

interface CardData {
  id?: number;
  url: string;
  title: string;
}

interface Props {
  films: CardData[];
  options?: EmblaOptionsType;
  title: string;
  loading: boolean;
}

export const SimpleSmallSwiper: React.FC<Props> = ({ films, options, title, loading }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  if (loading || !films || films?.length < 2) {
    return null;
  }

  return (
    <div className={styles.embla}>
      {<h3>{title}</h3>}
      <div className={styles.embla_viewport} ref={emblaRef}>
        <div className={styles.embla_container}>
          {films.map((film, i) => {
            return (
              <div key={film?.id || i} className={styles.similars_container}>
                {' '}
                {film.title && <h4 className={styles.card_title}>{film.title}</h4>}
                <SmallSliderCard img={film.url} id={film?.id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
