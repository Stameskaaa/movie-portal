import styles from './MainCard.module.scss';

export const MainCard = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_description}>
        <h4>The Matrix</h4>
        <p>Фантастика Боевик</p>
      </div>

      <img src="https://kinopoiskapiunofficial.tech/images/posters/kp/302.jpg" />
    </div>
  );
};
