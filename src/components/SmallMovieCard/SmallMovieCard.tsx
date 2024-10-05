import styles from './SmallMovieCard.module.scss';
import { IoMdStar } from 'react-icons/io';

export const SmallMovieCard = () => {
  return (
    <div className={styles.card_container}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHpxq8v6sVXAPCrcu_MVqsW9KcedenMLvdA&s" />
      <div className={styles.card_info}>
        <h3>Avatar</h3>
        <p>Adventure, Fantasy</p>
        <div className={styles.card_rating}>
          <IoMdStar size={20} color="#D6C75E" /> 5.0
        </div>
      </div>
    </div>
  );
};
