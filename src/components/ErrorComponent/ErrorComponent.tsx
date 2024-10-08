import styles from './ErrorComponent.module.scss';
import { MdErrorOutline } from 'react-icons/md';

interface Props {
  text?: string;
}

export const ErrorComponent: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.page_container}>
      <span>
        <MdErrorOutline />
      </span>
      {text && <p>{text}</p>}
    </div>
  );
};
