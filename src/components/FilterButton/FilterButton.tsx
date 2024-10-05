import { useState } from 'react';
import styles from './FilterButton.module.scss';

interface Props {
  text: string;
}

export const FilterButton: React.FC<Props> = ({ text }) => {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive((prev) => !prev)}
      className={`${styles.button_container} ${active ? styles.active : null}`}>
      {text}
    </button>
  );
};
