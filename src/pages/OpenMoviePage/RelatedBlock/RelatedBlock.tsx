import styles from './RelatedBlock.module.scss';
import { RelatedFilm } from '../../../types/apiTypes';
import { SpinnerLoader } from '../../../components/SpinnerLoader/SpinnerLoader';
import { Fragment } from 'react/jsx-runtime';

interface Props {
  films: RelatedFilm[];
  loading: boolean;
}

export const RelatedBlock: React.FC<Props> = ({ films, loading }) => {
  if (loading) {
    return <SpinnerLoader />;
  }

  if (!films || !films?.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h3>Related</h3>
      <div className={styles.related_list}>
        {films.map((film) => {
          return (
            <Fragment key={film.filmId}>
              <div className={styles.related_item}>
                <img src={film.posterUrl} alt="Image" />
                <div className={styles.item_data}>
                  <h3>Title 2</h3>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
