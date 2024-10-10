import styles from './TitledText.module.scss';

interface Props {
  title: string;
  text: any;
}

export const TitledText: React.FC<Props> = ({ title, text }) => {
  const isValidText = (typeof text === 'string' && text.trim()) || typeof text === 'number';

  if (!isValidText) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};
