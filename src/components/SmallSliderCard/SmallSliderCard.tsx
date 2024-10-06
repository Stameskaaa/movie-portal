import styles from './SmallSliderCard.module.scss';

interface Props {
  img: string;
  title?: string;
}

export const SmallSliderCard: React.FC<Props> = ({ img }) => {
  return (
    <div className={styles.card_container}>
      <img src={img} />
    </div>
  );
};
