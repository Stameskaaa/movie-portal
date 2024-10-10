import styles from './MovieFullCard.module.scss';
import { TitledText } from '../../../components/TitledText/TitledText';
import { FilmByID } from '../../../types/apiTypes';
import { ButtonLike } from '../../../components/ButtonLike/ButtonLike';
import { useFavorite } from '../../../hooks/useFavorite/useFavorite';
import { ErrorComponent } from '../../../components/ErrorComponent/ErrorComponent';

interface Props {
  data: FilmByID;
  id: string | undefined;
}

export const MovieFullCard: React.FC<Props> = ({ data, id }) => {
  const { inFavorite, addInFavorite } = useFavorite(id);

  if (!id) {
    return <ErrorComponent text="Film not found" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.upper_container}>
        <div className={styles.leftSide}>
          <h4>{data?.nameRu ? data.nameRu : data.nameOriginal}</h4>
          <img src={data.posterUrl} alt="N / A" />
          <p>{data.year}</p>
        </div>
        <div className={styles.rightSide}>
          <TitledText title="Year" text={data?.year} />
          {data?.filmLength && <TitledText title="Length" text={`${data?.filmLength} min`} />}
          <TitledText title="Start year" text={data?.startYear} />
          <TitledText title="Status" text={data?.productionStatus} />
        </div>
      </div>
      <div className={styles.down_container}>
        <TitledText title="Description" text={data?.description} />
        <TitledText title="Slogan" text={data?.slogan} />
        <TitledText title="Editor annotation" text={data?.editorAnnotation} />
        <div style={{ marginLeft: 'auto', width: '100px' }}>
          <ButtonLike onClick={addInFavorite} active={inFavorite} />
        </div>
      </div>
    </div>
  );
};
