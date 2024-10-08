import { Input } from '../../components/Input/Input';
import { MovieLoader } from '../../components/MovieLoader/MovieLoader';
import { useGetFilmsQuery } from '../../services/movieApi/movieApi';
import { SearchCard } from './SearchCard/SearchCard';
import { FilmData } from '../../types/apiTypes';
import styles from './SearchPage.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchString } from '../../types/apiTypes';
import { FiltersPanel } from './FiltersPanel/FiltersPanel';
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent';

export const SearchPage = () => {
  const [value, setValue] = useState('');
  const timer = useRef<null | NodeJS.Timeout>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchString, setSearchString] = useState<SearchString>(
    () => Object.fromEntries(searchParams.entries()) as SearchString,
  );
  const { data, error, isLoading } = useGetFilmsQuery(searchString);

  useEffect(() => {
    // При изменении поисковой строки или инпута
    // Для начала поиска используется только одна функция
    timer.current = setTimeout(() => {
      parseSearchParams();
    }, 300);
    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [value, searchParams]);

  const parseSearchParams = () => {
    const searchParamsObj = Object.fromEntries(searchParams.entries());
    const newParamsObj = {
      ...searchParamsObj,
      keyword: value,
    };
    setSearchString(newParamsObj);
    return newParamsObj;
  };

  if (error) {
    <div>Some Error</div>;
  }

  return (
    <div className={styles.page_container}>
      {' '}
      <Input value={value} setValue={setValue} />
      <FiltersPanel setData={setSearchString} data={searchString} />
      {isLoading ? (
        <MovieLoader />
      ) : !!data?.items.length ? (
        <div className={styles.grid_container}>
          {data.items.map((movie: FilmData) => {
            return <SearchCard key={movie.kinopoiskId} {...movie} />;
          })}
        </div>
      ) : (
        <ErrorComponent text="Movies not found " />
      )}
    </div>
  );
};
