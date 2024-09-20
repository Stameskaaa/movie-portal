import { useEffect, useState } from 'react';
import { fetchInitialMovies } from '../../services/api';
import { useAsyncReq } from '../../hooks/hooks';
import { SearchResponse } from '../../types/apiTypes';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const { data, error, loading, executeAsyncReq } = useAsyncReq(fetchInitialMovies);
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    executeAsyncReq();
  }, []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //сделать поиск после пары секунд и дебаунс
    setValue(e.target.value);
  };

  if (error) {
    //Voznikla error
    return <div>{error?.message}</div>;
  }

  return (
    <div>
      MainPage
      <hr />
      <label>
        Введите название фильма
        <input value={value} onChange={onInputChange} />
      </label>
      <hr />
      {loading ? (
        <div>Loading . . .</div>
      ) : (
        (data as SearchResponse).Search.map((movie, index) => {
          return (
            <MovieCard
              onClick={() => navigate(`/moviedetails/${movie.imdbID}`)}
              key={index}
              CardInfo={movie}
            />
          );
        })
      )}
    </div>
  );
};
