import { useEffect, useState } from 'react';
import styles from './PaginationInput.module.scss';
import { useSearchParams } from 'react-router-dom';

interface Props {
  totalPages: number;
  setData: (number: string) => void;
}

export const PaginationInput: React.FC<Props> = ({ totalPages, setData }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value) {
        setData(value);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  const hanleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^\d*$/.test(e.target.value)) {
      if (+e.target.value >= totalPages) {
        setValue(totalPages + '');
      } else {
        setValue(e.target.value);
      }
    }
  };

  return <input value={value} placeholder="Num" onChange={hanleInput} className={styles.input} />;
};
