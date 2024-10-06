import styles from './CardInfoBlock.module.scss';

interface Props {
  text: string;
  title: string;
}

export const CardInfoBlock: React.FC<Props> = ({ title, text }) => {
  return (
    <div className={styles.info_container}>
      <div>{title}</div>: <div style={{ marginLeft: 'auto' }}>{text}</div>
    </div>
  );
};
