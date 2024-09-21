import { useEffect, useRef, useState } from 'react';
import { fetchMovies } from '../../services/api';
import { useAsyncReq } from '../../hooks/hooks';
import { SearchResponse } from '../../types/apiTypes';
import { MovieList } from '../../components/MoviesList/MovieList';
import styles from './MainPage.module.scss';
export const MainPage = () => {
  const { data, error, loading, executeAsyncReq } = useAsyncReq(fetchMovies);
  const [value, setValue] = useState<string>('');
  const [initialLoad, setInitialLoad] = useState<boolean>(false);
  const timer = useRef<undefined | NodeJS.Timeout>(undefined);

  useEffect(() => {
    executeAsyncReq({ type: 's', search: 'Black' });
    setInitialLoad(true);
  }, [initialLoad]);

  useEffect(() => {
    if (initialLoad) {
      timer.current = setTimeout(() => {
        executeAsyncReq({ type: 's', search: value });
      }, 300);
    }

    return () => clearTimeout(timer.current);
  }, [value]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <main className={styles.container}>
      <label>
        <input placeholder="Введите название фильма" value={value} onChange={onInputChange} />
      </label>
      <hr />
      <MovieList loading={loading} error={error} data={data as SearchResponse} />
    </main>
  );
};
