import { Button } from '../Button/Button';
import { SmallMovieCard } from '../SmallMovieCard/SmallMovieCard';
import styles from './SideFetchedMovies.module.scss';
import { FilmData, FilmByID } from '../../types/apiTypes';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';

type MovieData = FilmData[] | FilmByID[];

interface Props {
  title: string;
  buttText: string;
  movieData: MovieData | undefined;
  onClick: () => void;
}

export const SideFetchedMovies: React.FC<Props> = ({ title, buttText, movieData, onClick }) => {
  return (
    <section className={styles.sideMovies_container}>
      <h3 className={styles.title}>{title}</h3>

      {movieData && !!movieData.length ? (
        movieData.slice(0, 6).map((movie) => {
          return <SmallMovieCard key={movie.kinopoiskId} {...movie} />;
        })
      ) : (
        <ErrorComponent />
      )}

      <Button onClick={onClick} text={buttText} />
    </section>
  );
};
