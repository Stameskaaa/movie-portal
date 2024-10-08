import { useNavigate } from 'react-router-dom';
import styles from './SmallSliderCard.module.scss';

interface Props {
  img: string;
  title?: string;
  id?: number;
}

export const SmallSliderCard: React.FC<Props> = ({ img, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => (id ? navigate(`/openmovie/${id}`) : null)}
      className={styles.card_container}>
      <img src={img} />
    </div>
  );
};
