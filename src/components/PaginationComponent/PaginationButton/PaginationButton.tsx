import styles from './PaginationButton.module.scss';

interface Props {
  text: string;
  onClick: (number: string) => void;
  currentPage: string;
}

export const PaginationButton: React.FC<Props> = ({ text, onClick, currentPage }) => {
  const handlePaginationClick = () => {
    onClick(text);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${styles.button} ${currentPage === text ? styles.active : null}`}
      onClick={() => handlePaginationClick()}>
      {text}
    </button>
  );
};
