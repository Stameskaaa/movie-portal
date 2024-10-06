import styles from './input.module.scss';
import { IoIosSearch } from 'react-icons/io';
import { HiMiniXMark } from 'react-icons/hi2';
interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: React.FC<Props> = ({ value, setValue }) => {
  return (
    <div className={styles.input_container}>
      <IoIosSearch className={styles.icon} size={26} />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
        placeholder="Search"
      />
      <HiMiniXMark onClick={() => setValue('')} className={styles.icon2} size={30} />
    </div>
  );
};
