import styles from './SearchCard.module.scss';
import { FilmData } from '../../../types/apiTypes';

export const SearchCard: React.FC<FilmData> = (props) => {
  return (
    <div className={styles.card_container}>
      <img src={props.posterUrl} />
      {props.nameRu ? <p>{props.nameRu}</p> : <p>{props.nameOriginal}</p>}
    </div>
  );
};
