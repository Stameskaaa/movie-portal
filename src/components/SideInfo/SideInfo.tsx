import { useState, useEffect } from 'react';
import { Input } from '../Input/Input';
import { SideFetchedMovies } from '../SideFetchedMovies/SideFetchedMovies';
import styles from './SideInfo.module.scss';
import { useGetMoreBaseInfoQuery, useGetPopularMovieQuery } from '../../services/movieApi/movieApi';
import { SpinnerLoader } from '../SpinnerLoader/SpinnerLoader';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/typedReduxHooks/reduxHook';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';

export const SideInfo = () => {
  const [value, setValue] = useState('');
  const {
    data: popular,
    error: popularErr,
    isLoading: popularLoading,
  } = useGetPopularMovieQuery(2);
  const { authorized, userData } = useAppSelector((state) => state.auth);

  const favoritesArray = !!userData?.favorites.length ? [...userData?.favorites.slice(0, 3)] : [];

  const {
    data: favorites,
    error: favoritesErr,
    isLoading: favoritesLoading,
    refetch: refetchFavorites,
  } = useGetMoreBaseInfoQuery({ ids: favoritesArray });
  const navigate = useNavigate();

  useEffect(() => {
    if (authorized && userData?.favorites.length) {
      refetchFavorites();
    }
  }, [userData?.favorites]);

  if (popularErr && favoritesErr) {
    <ErrorComponent text="Some error" />;
  }

  return (
    <section className={styles.sideinfo_container}>
      <Input value={value} setValue={setValue} />
      {popularLoading && favoritesLoading ? (
        <SpinnerLoader />
      ) : (
        <>
          <SideFetchedMovies
            onClick={() => navigate('/trendingnow?type=TOP_POPULAR_ALL&page=2')}
            movieData={popular?.items}
            title="Popular Movies"
            buttText="All trending movies"
          />
          {authorized && (
            <SideFetchedMovies
              onClick={() => navigate('/favorites')}
              movieData={favorites}
              title="Favorites"
              buttText="Show more favorites"
            />
          )}
        </>
      )}
    </section>
  );
};
