import styles from './FavoritesPage.module.scss';
import { FavoriteFilmCard } from './FavoriteFilmCard/FavoriteFilmCard';
import { MovieLoader } from '../../components/MovieLoader/MovieLoader';
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent';
import { useGetMoreBaseInfoQuery } from '../../services/movieApi/movieApi';
import { useAppSelector } from '../../hooks/typedReduxHooks/reduxHook';
import { useEffect } from 'react';

export const FavoritesPage = () => {
  const { userData } = useAppSelector((state) => state.auth);
  const favoritesArray = !!userData?.favorites.length ? userData?.favorites : [];
  const {
    data: favorites,
    error: favoritesErr,
    isLoading: favoritesLoading,
    refetch: favoritesRefetch,
  } = useGetMoreBaseInfoQuery({ ids: favoritesArray });

  useEffect(() => {
    favoritesRefetch();
  }, [userData?.favorites]);

  if (favoritesLoading) {
    <MovieLoader />;
  }
  if (favoritesErr) {
    <div>error . . .</div>;
  }

  if (!!!favorites?.length) {
    return <ErrorComponent text="Empty" />;
  }

  return (
    <div className={styles.page_container}>
      <h4>Favorite films</h4>
      {favorites?.map((movie, index) => {
        return <FavoriteFilmCard key={index} {...movie} />;
      })}
    </div>
  );
};
