import { useEffect } from 'react';
import { useAppSelector, useAsyncReq } from '../../hooks/hooks';
import { UserState } from '../../types/apiTypes';
import { fetchMoviesByArr } from '../../services/api';
import styles from './FavoritesPage.module.scss';
import { FavoriteFilmCard } from './FavoriteFilmCard/FavoriteFilmCard';

export const FavoritesPage = () => {
  const { data, error, loading, executeAsyncReq } = useAsyncReq(fetchMoviesByArr);
  const user = useAppSelector((state) => state.auth.userData) as UserState;

  useEffect(() => {
    if (!!user?.favorites) {
      executeAsyncReq(user.favorites);
    }
  }, []);

  if (loading) {
    <div>Loading . . .</div>;
  }
  if (error) {
    <div>{error.message}</div>;
  }

  if (!!user?.favorites) {
    return <div>Empty</div>;
  }

  return (
    <div className={styles.page_container}>
      <h4>Favorite films</h4>
      <hr />
      {data?.map((movie) => {
        return (
          <>
            {' '}
            <FavoriteFilmCard {...movie} />
            <hr />
          </>
        );
      })}
    </div>
  );
};
