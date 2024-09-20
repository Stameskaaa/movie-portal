import { SearchResult } from '../../types/apiTypes';

interface MovieCardProps {
  CardInfo: SearchResult;
  onClick: () => void;
}

export const MovieCard = ({ CardInfo, onClick }: MovieCardProps) => {
  return (
    <>
      <h4>
        {CardInfo.Title} {CardInfo.Year}
      </h4>
      <div>
        <img onClick={onClick} src={CardInfo.Poster} alt="N / A" />
      </div>
    </>
  );
};
