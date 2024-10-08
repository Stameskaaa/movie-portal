import styles from './SmallMovieCard.module.scss';
import { IoMdStar } from 'react-icons/io';
import { FilmData, FilmByID } from '../../types/apiTypes';
import { useNavigate } from 'react-router-dom';

export const SmallMovieCard: React.FC<FilmData | FilmByID> = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/openmovie/${props.kinopoiskId}`)}
      className={styles.card_container}>
      <img src={props.posterUrl} />
      <div className={styles.card_info}>
        <h3>{props.nameRu ? props.nameRu : props.nameOriginal}</h3>
        {!!props.genres.length && (
          <p>{props.genres.reduce((acc, value) => acc + ` ${value.genre}`, '')}</p>
        )}
        <div className={styles.card_rating}>
          <IoMdStar size={20} color="#D6C75E" />{' '}
          {props.ratingKinopoisk ? (props.ratingKinopoisk / 2).toFixed(1) : `5.0`}
        </div>
      </div>
    </div>
  );
};
