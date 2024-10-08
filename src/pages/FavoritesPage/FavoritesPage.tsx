import { useEffect } from 'react';
import { useAppSelector, useAsyncReq } from '../../hooks/hooks';
import { UserState } from '../../types/apiTypes';
import { fetchMoviesByArr } from '../../services/api';
import styles from './FavoritesPage.module.scss';
import { FavoriteFilmCard } from './FavoriteFilmCard/FavoriteFilmCard';
import { MovieLoader } from '../../components/MovieLoader/MovieLoader';
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent';

export const FavoritesPage = () => {
  const { data, error, loading, executeAsyncReq } = useAsyncReq(fetchMoviesByArr);
  const user = useAppSelector((state) => state.auth.userData) as UserState;

  useEffect(() => {
    if (!!user?.favorites) {
      executeAsyncReq(user.favorites);
    }
  }, [user]);

  if (loading) {
    <MovieLoader />;
  }
  if (error) {
    <div>error . . .</div>;
  }

  if (!!!user?.favorites || true) {
    return <ErrorComponent text="Empty" />;
  }

  return (
    <div className={styles.page_container}>
      <h4>Favorite films</h4>
      {data?.map((movie, index) => {
        return <FavoriteFilmCard key={index} {...movie} />;
      })}
    </div>
  );
};
