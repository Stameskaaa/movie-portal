import styles from './ButtonLike.module.scss';
import { GoHeartFill } from 'react-icons/go';

interface Props {
  active: boolean;
  onClick: () => void;
}

export const ButtonLike: React.FC<Props> = ({ active, onClick }) => {
  const stopPropagation = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <GoHeartFill
      onClick={stopPropagation}
      className={`${styles.hearth} ${active ? styles.active : null}`}
      size={40}
    />
  );
};
