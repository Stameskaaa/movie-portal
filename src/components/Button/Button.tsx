import styles from './Button.module.scss';

interface Props {
  text: string;
}

export const Button: React.FC<Props> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};
