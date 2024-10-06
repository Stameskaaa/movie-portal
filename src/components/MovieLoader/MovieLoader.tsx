import styles from './MovieLoader.module.scss';

export const MovieLoader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__filmstrip}></div>
      <p className={styles.loader__text}>loading</p>
    </div>
  );
};
