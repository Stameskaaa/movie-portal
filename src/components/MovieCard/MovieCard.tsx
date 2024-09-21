import { SearchResult } from '../../types/apiTypes';
import styles from './MovieCard.module.scss';
interface MovieCardProps {
  CardInfo: SearchResult;
  onClick: () => void;
}

export const MovieCard = ({ CardInfo, onClick }: MovieCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h4>
          {CardInfo.Title} {CardInfo.Year}
        </h4>
        {CardInfo.Poster !== 'N/A' ? (
          <div>
            <img onClick={onClick} src={CardInfo.Poster} alt="N / A" />
          </div>
        ) : (
          <div>Zamena kartinki</div>
        )}
      </div>
    </div>
  );
};
