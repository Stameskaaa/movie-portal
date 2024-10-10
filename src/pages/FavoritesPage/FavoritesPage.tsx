import styles from './FavoritesPage.module.scss';
import { MovieLoader } from '../../components/MovieLoader/MovieLoader';
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent';
import { useGetMoreBaseInfoQuery } from '../../services/movieApi/movieApi';
import { useAppSelector } from '../../hooks/typedReduxHooks/reduxHook';
import { useEffect, useState } from 'react';
import { MovieFullCard } from '../OpenMoviePage/MovieFullCard/MovieFullCard';
import { PaginationComponent } from '../../components/PaginationComponent/PaginationComponent';
import { useSearchParams } from 'react-router-dom';

const sliceArray = ({
  array,
  page,
  pageCount,
}: {
  array: any[];
  page: number;
  pageCount: number;
}) => {
  if (typeof page !== 'number' || page < 1) {
    page = 1;
  }
  const start = (page - 1) * pageCount;
  const end = start + pageCount;
  return array.slice(start, end);
};

const FavoritesPage = () => {
  const { userData } = useAppSelector((state) => state.auth);
  const [searchParams] = useSearchParams();
  const favoritesArray = !!userData?.favorites.length ? userData?.favorites : [];
  const {
    data: favorites,
    error: favoritesErr,
    isLoading: favoritesLoading,
    refetch: favoritesRefetch,
  } = useGetMoreBaseInfoQuery({ ids: favoritesArray });
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    favoritesRefetch();
  }, [userData?.favorites]);

  useEffect(() => {
    const num = Number(searchParams.get('page')) || 1;
    setPage(num);
  }, [searchParams]);

  if (favoritesLoading) {
    return <MovieLoader />;
  }
  if (favoritesErr) {
    return <ErrorComponent text="Error" />;
  }

  if (!!!favorites?.length) {
    return <ErrorComponent text="Empty" />;
  }

  return (
    <div className={styles.page_container}>
      <h4>Favorite films</h4>
      {sliceArray({ array: favorites, page, pageCount: 5 })?.map((movie, index) => {
        return <MovieFullCard id={movie.kinopoiskId + ''} key={index} data={movie} />;
      })}
      {userData?.favorites && (
        <PaginationComponent totalPages={Math.ceil(userData?.favorites.length / 5)} />
      )}
    </div>
  );
};

export default FavoritesPage;
