import styles from './FloatingInput.module.scss';

interface Props {
  text: string;
  data: string;
  setData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
}

export function FloatingInput({ text, data, setData, name, type }: Props) {
  return (
    <div className={styles.container}>
      <input type={type} name={name} value={data} onChange={setData} placeholder="" />
      <label>{text}</label>
    </div>
  );
}
