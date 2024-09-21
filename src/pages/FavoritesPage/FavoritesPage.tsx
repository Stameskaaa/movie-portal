import { useEffect } from 'react';
import { useAppSelector, useAsyncReq } from '../../hooks/hooks';
import { UserState } from '../../types/apiTypes';
import { fetchMoviesByArr } from '../../services/api';

export const FavoritesPage = () => {
  const { data, error, loading, executeAsyncReq } = useAsyncReq(fetchMoviesByArr);
  const user = useAppSelector((state) => state.auth.userData) as UserState;

  useEffect(() => {
    if (user.favorites.length > 0) {
      executeAsyncReq(user.favorites);
    }
  }, []);

  if (loading) {
    <div>Loading . . .</div>;
  }
  if (error) {
    <div>{error.message}</div>;
  }

  if (user.favorites.length <= 0) {
    return <div>Empty</div>;
  }

  return (
    <div>
      {data?.map((movie) => {
        return (
          <div key={movie.imdbID}>
            <h4>{movie.Title}</h4>
            {movie.Poster !== 'N/A' ? <img src={movie.Poster} /> : <div>change kartinku</div>}
            <p>{movie.Plot}</p>
          </div>
        );
      })}
    </div>
  );
};
