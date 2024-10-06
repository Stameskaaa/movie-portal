import { Button } from '../Button/Button';
import { SmallMovieCard } from '../SmallMovieCard/SmallMovieCard';
import styles from './SideFetchedMovies.module.scss';
import { MovieResponse } from '../../types/apiTypes';
interface Props {
  title: string;
  buttText: string;
  movieData: MovieResponse;
  onClick: () => void;
}

export const SideFetchedMovies: React.FC<Props> = ({ title, buttText, movieData, onClick }) => {
  return (
    <section className={styles.sideMovies_container}>
      <h3 className={styles.title}>{title}</h3>
      {movieData.items.slice(0, 6).map((movie) => {
        return <SmallMovieCard key={movie.kinopoiskId} {...movie} />;
      })}
      <Button onClick={onClick} text={buttText} />
    </section>
  );
};
