import styles from './input.module.scss';
import { IoIosSearch } from 'react-icons/io';
export const Input = () => {
  return (
    <div className={styles.input_container}>
      <IoIosSearch className={styles.icon} size={26} />
      <input className={styles.input} placeholder="Search" />{' '}
    </div>
  );
};
