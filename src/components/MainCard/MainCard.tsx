import { useNavigate } from 'react-router-dom';
import styles from './MainCard.module.scss';

interface Props {
  img: string;
  title: string;
  id: number;
}

export const MainCard: React.FC<Props> = ({ img, title, id }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/openmovie/${id}`)} className={styles.card_container}>
      <div className={styles.card_description}>
        <h4>{title}</h4>
        <p>Фантастика Боевик</p>
      </div>

      <img src={img} />
    </div>
  );
};
