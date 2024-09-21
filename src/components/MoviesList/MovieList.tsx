import { useNavigate } from 'react-router-dom';
import { SearchResponse } from '../../types/apiTypes';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './MovieList.module.scss';
interface Props {
  loading: boolean;
  error: any;
  data: SearchResponse;
}

export const MovieList: React.FC<Props> = ({ loading, error, data }) => {
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading . . .</div>;
  }

  if (error) {
    return <div>{error.message}</div>; // Отображаем сообщение об ошибке
  }

  return (
    <div className={styles.container}>
      {data && data.Search?.length > 0 ? (
        (data as SearchResponse).Search.map((movie, index) => (
          <MovieCard
            onClick={() => navigate(`/moviedetails/${movie.imdbID}`)}
            key={index}
            CardInfo={movie}
          />
        ))
      ) : (
        <div>Нет результатов.</div> // Сообщение, если нет данных
      )}
    </div>
  );
};
