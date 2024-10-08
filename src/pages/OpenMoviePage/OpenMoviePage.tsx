import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './OpenMoviePage.module.scss';
import { useGetBaseInfoQuery } from '../../services/movieApi/movieApi';

export const OpenMoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetBaseInfoQuery({ id });
  const [hasIdState, setHasIdState] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //СКРОЛ НАВЕРХ СДЕЛАТЬ пОПРОБОВАТЬ объекдинить несколько запросов в квери ртк

  if (error) return <div>"error"</div>;
  if (isLoading) return <div>Loading . . .</div>;

  return (
    <>
      {data ? (
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h4>{data.nameOriginal}</h4>

            <img src={data.posterUrl} alt="N / A" />
            {/* {userData && hasIdState ? (
              <button onClick={() => handleAddFavorite(data.imdbID)}>Liked</button>
            ) : (
              <button onClick={() => handleAddFavorite(data.imdbID)}>NotLiked</button>
            )} */}
            <p>{data.year}</p>
          </div>{' '}
          <div className={styles.rightSide}>
            <>
              <h4>description</h4>
              {data.description}
            </>
            <>
              <h4>Runtime</h4>
              {data.filmLength}
            </>
            <>
              <h4>slogan</h4>
              {data.slogan}
            </>
            <>
              <h4>editorAnnotation</h4>
              {data.editorAnnotation}
            </>
          </div>
        </div>
      ) : (
        <div>Film didnt founded!</div>
      )}
    </>
  );
};
