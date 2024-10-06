import { useState } from 'react';
import { Input } from '../Input/Input';
import { SideFetchedMovies } from '../SideFetchedMovies/SideFetchedMovies';
import styles from './SideInfo.module.scss';
import { useGetPopularMovieQuery } from '../../services/movieApi/movieApi';
import { SpinnerLoader } from '../SpinnerLoader/SpinnerLoader';
import { useNavigate } from 'react-router-dom';

export const SideInfo = () => {
  const [value, setValue] = useState('');
  const { data, error, isLoading } = useGetPopularMovieQuery(2);
  const navigate = useNavigate();

  return (
    <section className={styles.sideinfo_container}>
      <Input value={value} setValue={setValue} />
      {isLoading ? (
        <SpinnerLoader />
      ) : (
        <>
          <SideFetchedMovies
            onClick={() => navigate('/search/v2.2/films/collections?type=TOP_POPULAR_ALL&page=2')}
            movieData={data}
            title="Popular Movies"
            buttText="All trending movies"
          />
          <SideFetchedMovies
            onClick={() => navigate('/favorites')}
            movieData={data}
            title="Favorites"
            buttText="Show more favorites"
          />
        </>
      )}
    </section>
  );
};
