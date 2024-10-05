import styles from './CardInfoBlock.module.scss';

interface Props {
  text: string;
  title: string;
}

export const CardInfoBlock: React.FC<Props> = ({ title, text }) => {
  return (
    <div className={styles.info_container}>
      <span>{title}</span>: <span>{text}</span>
    </div>
  );
};
