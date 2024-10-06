import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 - Страница не найдена</h1>
      <p>Извините, но запрашиваемая страница не существует.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};
