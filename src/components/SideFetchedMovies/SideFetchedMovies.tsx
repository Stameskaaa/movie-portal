import { Button } from '../Button/Button';
import { SmallMovieCard } from '../SmallMovieCard/SmallMovieCard';
import styles from './SideFetchedMovies.module.scss';

interface Props {
  title: string;
  buttText: string;
}

export const SideFetchedMovies: React.FC<Props> = ({ title, buttText }) => {
  return (
    <section className={styles.sideMovies_container}>
      <h3>{title}</h3>
      <SmallMovieCard />
      <SmallMovieCard />
      <SmallMovieCard />

      <Button text={buttText} />
    </section>
  );
};
