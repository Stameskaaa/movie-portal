import { useSearchParams } from 'react-router-dom';
import { useGetCollectionsQuery } from '../../services/movieApi/movieApi';
import { SearchCard } from '../SearchPage/SearchCard/SearchCard';
import styles from './TrendingPage.module.scss';
import { FilmData } from '../../types/apiTypes';
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent';
import { MovieLoader } from '../../components/MovieLoader/MovieLoader';
import { PaginationComponent } from '../../components/PaginationComponent/PaginationComponent';

const TrendingPage = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const type = searchParams.get('type') || 'TOP_POPULAR_ALL';
  const { data, isLoading, error } = useGetCollectionsQuery({ page, type });

  if (isLoading) {
    return <MovieLoader />;
  }
  const filmList: FilmData[] = data?.items;

  return (
    <div className={styles.page_container}>
      <h4 className={styles.title}>Trending films</h4>

      {!!filmList?.length ? (
        <>
          <div className={styles.grid_container}>
            {filmList.map((movie) => {
              return <SearchCard key={movie.kinopoiskId} {...movie} />;
            })}
          </div>
          <PaginationComponent totalPages={data.totalPages} />
        </>
      ) : (
        <ErrorComponent text="Movies not found" />
      )}
    </div>
  );
};

export default TrendingPage;
