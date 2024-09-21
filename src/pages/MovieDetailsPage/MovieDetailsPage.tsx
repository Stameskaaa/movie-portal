import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAsyncReq } from '../../hooks/hooks';
import { fetchMovies } from '../../services/api';
import { useEffect, useState } from 'react';
import { addFavorite, hasId } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { setFavorites } from '../../features/authSlice/authSlice';
import styles from './MovieDetails.module.scss';
export const MovieDetailsPage = () => {
  const { id } = useParams();
  const { data, error, loading, executeAsyncReq } = useAsyncReq(fetchMovies);
  const { userData } = useAppSelector((state) => state.auth);
  const [hasIdState, setHasIdState] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      executeAsyncReq({
        type: 'i',
        search: id,
      });
    }
  }, [id]);

  useEffect(() => {
    if (data && 'Title' in data && userData) {
      setHasIdState(hasId('', data.imdbID, userData)); //считываем из локалстора, редакс уже оттуда считал
    }
  }, [data]);

  const handleAddFavorite = (id: string) => {
    if (!userData || !data) {
      navigate('/authorization');
    } else {
      setHasIdState(addFavorite(userData.name, id)!); //Добавляем в локалстор
      dispatch(setFavorites(id)); //Добавляем в редакс
    }
  };

  if (error) return <div>{error.message}</div>;
  if (loading) return <div>Loading . . .</div>;

  return (
    <>
      {data && 'Title' in data ? (
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h4>{data.Title}</h4>

            <img src={data.Poster} alt="N / A" />
            {userData && hasIdState ? (
              <button onClick={() => handleAddFavorite(data.imdbID)}>Liked</button>
            ) : (
              <button onClick={() => handleAddFavorite(data.imdbID)}>NotLiked</button>
            )}
            <p>{data.Released}</p>
          </div>{' '}
          <div className={styles.rightSide}>
            <>
              <h4>Plot</h4>
              {data.Plot}
            </>
            <>
              <h4>Runtime</h4>
              {data.Runtime}
            </>
            <>
              <h4>Production</h4>
              {data.Production}
            </>
            <>
              <h4>Country</h4>
              {data.Country}
            </>
          </div>
        </div>
      ) : (
        <div>data net</div>
      )}
    </>
  );
};
