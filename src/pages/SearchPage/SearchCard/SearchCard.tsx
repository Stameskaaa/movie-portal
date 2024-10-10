import styles from './SearchCard.module.scss';
import { FilmData } from '../../../types/apiTypes';
import { useNavigate } from 'react-router-dom';
import { ButtonLike } from '../../../components/ButtonLike/ButtonLike';
import { useFavorite } from '../../../hooks/useFavorite/useFavorite';

export const SearchCard: React.FC<FilmData> = (props) => {
  const { inFavorite, addInFavorite } = useFavorite(props.kinopoiskId + '');
  const naviagate = useNavigate();

  return (
    <div
      onClick={() => naviagate(`/openmovie/${props.kinopoiskId}`)}
      className={styles.card_container}>
      <img className={styles.image} src={props.posterUrl} />
      <div className={styles.like_container}>
        <ButtonLike active={inFavorite} onClick={addInFavorite} />
      </div>
      {props.nameRu ? <p>{props.nameRu}</p> : <p>{props.nameOriginal}</p>}
    </div>
  );
};
