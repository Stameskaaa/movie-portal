import styles from './SearchCard.module.scss';
import { FilmData } from '../../../types/apiTypes';
import { useNavigate } from 'react-router-dom';

export const SearchCard: React.FC<FilmData> = (props) => {
  const naviagate = useNavigate();

  return (
    <div
      onClick={() => naviagate(`/openmovie/${props.kinopoiskId}`)}
      className={styles.card_container}>
      <img src={props.posterUrl} />
      {props.nameRu ? <p>{props.nameRu}</p> : <p>{props.nameOriginal}</p>}
    </div>
  );
};
