import styles from './ButtonLike.module.scss';
import { GoHeartFill } from 'react-icons/go';

interface Props {
  active: boolean;
  onClick: () => void;
}

export const ButtonLike: React.FC<Props> = ({ active, onClick }) => {
  return (
    <GoHeartFill
      onClick={onClick}
      className={`${styles.hearth} ${active ? styles.active : null}`}
      size={40}
    />
  );
};
