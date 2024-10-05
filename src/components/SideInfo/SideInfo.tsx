import { Input } from '../Input/Input';
import { SideFetchedMovies } from '../SideFetchedMovies/SideFetchedMovies';
import styles from './SideInfo.module.scss';

export const SideInfo = () => {
  return (
    <section className={styles.sideinfo_container}>
      <Input />
      <SideFetchedMovies title="Popular Movies" buttText="All trending movies" />
      <SideFetchedMovies title="Favorites" buttText="Show more favorites" />
    </section>
  );
};
