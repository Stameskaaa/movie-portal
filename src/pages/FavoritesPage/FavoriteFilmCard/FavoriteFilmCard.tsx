import { CardInfoBlock } from './CardInfoBlock/CardInfoBlock';
import styles from './FavoriteFilmCard.module.scss';
import { FilmByID } from '../../../types/apiTypes';
import { ButtonLike } from '../../../components/ButtonLike/ButtonLike';
import { useFavorite } from '../../../hooks/useFavorite/useFavorite';
export const FavoriteFilmCard: React.FC<FilmByID> = (movie) => {
  const { inFavorite, addInFavorite } = useFavorite(`${movie.kinopoiskId}`);

  return (
    <div className={styles.container_card} key={movie.kinopoiskId}>
      <div className={styles.container_upper}>
        <div className={styles.info_container}>
          <h4>{movie.nameEn ? movie.nameEn : movie.nameOriginal}</h4>

          <CardInfoBlock title="filmLength" text={`${movie.filmLength}`} />
          <CardInfoBlock title="year" text={`${movie.year}`} />
        </div>

        <img className={styles.card_poster} src={movie.posterUrl} />
      </div>
      <div className={styles.container_lower}>
        <p>{movie.description}</p>
        <p>{movie.slogan}</p>
      </div>
      <ButtonLike onClick={addInFavorite} active={inFavorite} />
    </div>
  );
};
