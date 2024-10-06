import { FilterButton } from '../../components/FilterButton/FilterButton';
import { Input } from '../../components/Input/Input';
import { MovieLoader } from '../../components/MovieLoader/MovieLoader';
import { useGetFilmsQuery } from '../../services/movieApi/movieApi';
import { SearchCard } from './SearchCard/SearchCard';
import { FilmData } from '../../types/apiTypes';
import styles from './SearchPage.module.scss';
import { useEffect, useState } from 'react';

export const SearchPage = () => {
  const [value, setValue] = useState('');
  const [searchString, setSearchString] = useState('');
  const { data, error, isLoading } = useGetFilmsQuery(searchString);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchString(value);
    }, 300);
    return () => clearTimeout(timer);
  }, [value]);

  if (isLoading) {
    return <MovieLoader />;
  }

  return (
    <div className={styles.page_container}>
      {' '}
      <Input value={value} setValue={setValue} />
      <div className={styles.search_container}>
        <FilterButton text="Films" />

        <FilterButton text="Actors" />
      </div>
      <div className={styles.grid_container}>
        {data.items.map((movie: FilmData) => {
          return <SearchCard key={movie.kinopoiskId} {...movie} />;
        })}
      </div>
    </div>
  );
};
