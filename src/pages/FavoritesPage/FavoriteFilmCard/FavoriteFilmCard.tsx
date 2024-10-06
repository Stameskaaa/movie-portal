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
    <div className={styles.container_card} key={movie.imdbID}>
      <div className={styles.container_upper}>
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
      <div className={styles.container_lower}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea incidunt voluptates
          aspernatur. Dicta perspiciatis hic laudantium possimus eaque aperiam consectetur minima
          recusandae excepturi adipisci. Ea id odio est consequatur? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ad ea incidunt voluptates aspernatur. Dicta perspiciatis hic
          laudantium possimus eaque aperiam consectetur minima recusandae excepturi adipisci. Ea id
          odio est consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea
          incidunt voluptates aspernatur. Dicta perspiciatis hic laudantium possimus eaque aperiam
          consectetur minima recusandae excepturi adipisci. Ea id odio est consequatur?
        </p>
      </div>
    </div>
  );
};
