import styles from './SpinnerLoader.module.scss';

export const SpinnerLoader = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader} />{' '}
    </div>
  );
};
