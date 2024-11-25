import { SimpleSmallSwiper } from '../../../components/SimpleSmallSwiper/SimpleSmallSwiper';
import styles from './SwiperSection.module.scss';
import { EmblaOptionsType } from 'embla-carousel';

interface CardData {
  id?: number;
  url: string;
  title: string;
}

interface Props {
  title: string;
  loading: boolean;
  films: CardData[];
  options?: EmblaOptionsType;
}

export const SwiperSection: React.FC<Props> = ({ title, loading, films }) => {
  if (!films || films.length < 2) {
    return null;
  }

  return (
    <div className={styles.background}>
      <SimpleSmallSwiper
        loading={loading}
        title={title}
        options={{ dragFree: true }}
        films={films}
      />
    </div>
  );
};
