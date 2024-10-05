import { CardInfoBlock } from './CardInfoBlock/CardInfoBlock';
import styles from './FavoriteFilmCard.module.scss';

interface IMovieObj {
  imdbID: string;
  Title: string;
  Poster: string;
  Plot: string;
}

export const FavoriteFilmCard: React.FC<IMovieObj> = (movie) => {
  return (
    <div className={styles.card_container} key={movie.imdbID}>
      <div className={styles.info_container}>
        <h4>{movie.Title}</h4>

        <CardInfoBlock title="Plot" text={movie.Plot} />
        <CardInfoBlock title="Plot" text={movie.Plot} />
        <CardInfoBlock title="Plot" text={movie.Plot} />
      </div>
      {movie.Poster !== 'N/A' ? (
        <img className={styles.card_poster} src={movie.Poster} />
      ) : (
        <div>change kartinku</div>
      )}
    </div>
  );
};
