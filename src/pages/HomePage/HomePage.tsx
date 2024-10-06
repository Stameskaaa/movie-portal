import styles from './HomePage.module.scss';
import { EmblaCarousel } from '../../components/EmblaCarousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import {
  useGetPersonsQuery,
  useGetPopularMovieQuery,
  useGetTopMovieQuery,
} from '../../services/movieApi/movieApi';
import { MovieLoader } from '../../components/MovieLoader/MovieLoader';

const OPTIONS: EmblaOptionsType = {};
const OPTIONS2: EmblaOptionsType = { dragFree: true };

export const HomePage = () => {
  const {
    data: popular,
    error: popularError,
    isLoading: isLoadingPopular,
  } = useGetPopularMovieQuery(1);

  const { data: top, error: topError, isLoading: isLoadingTop } = useGetTopMovieQuery(1);

  const {
    data: persons,
    error: personsError,
    isLoading: isLoadingPersons,
  } = useGetPersonsQuery({ name: 'o', page: 1 });

  if (isLoadingTop || isLoadingPersons || isLoadingPopular) {
    return <MovieLoader />;
  }

  return (
    <section className={styles.home_container}>
      <h1>Watch now</h1>
      <EmblaCarousel slides={popular.items} options={OPTIONS} />
      <h1>Top TV shows</h1>
      <EmblaCarousel multipleSlides={true} slides={top.items} options={OPTIONS2} />
      <h1>Random actors</h1>
      <EmblaCarousel multipleSlides={true} slides={persons.items} options={OPTIONS2} />
    </section>
  );
};
