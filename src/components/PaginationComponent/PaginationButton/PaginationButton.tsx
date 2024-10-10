import styles from './PaginationButton.module.scss';

interface Props {
  text: string;
  onClick: (number: string) => void;
}

export const PaginationButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={() => onClick(text)}>
      {text}
    </button>
  );
};
