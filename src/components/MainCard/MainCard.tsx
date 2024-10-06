import styles from './MainCard.module.scss';

interface Props {
  img: string;
  title: string;
}

export const MainCard: React.FC<Props> = ({ img, title }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_description}>
        <h4>{title}</h4>
        <p>Фантастика Боевик</p>
      </div>

      <img src={img} />
    </div>
  );
};
