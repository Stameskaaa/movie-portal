import { useSearchParams } from 'react-router-dom';
import { PaginationButton } from './PaginationButton/PaginationButton';
import styles from './PaginationComponent.module.scss';
import { useEffect, useState } from 'react';
import { PaginationInput } from './PaginationInput/PaginationInput';

interface Props {
  totalPages: number;
}

export const PaginationComponent: React.FC<Props> = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState('1');

  useEffect(() => {
    const paramsObject = Object.fromEntries(searchParams.entries());
    if (!paramsObject?.page) {
      setNewPage('1');
    } else {
      setNewPage(currentPage);
    }
  }, [currentPage, searchParams]);

  const setNewPage = (number: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', number);
    setSearchParams(newParams);
  };

  const arrNumber = (num: number) => {
    return Array.from({ length: num }, (_, i) => i + 1);
  };

  return (
    <div className={styles.container}>
      {totalPages &&
        totalPages >= 5 &&
        arrNumber(5).map((value) => (
          <PaginationButton key={value} onClick={setCurrentPage} text={`${value}`} />
        ))}{' '}
      {totalPages > 6 && (
        <>
          <span>. . .</span>
          <PaginationInput totalPages={totalPages} setData={setCurrentPage} />
          <PaginationButton key={totalPages} onClick={setCurrentPage} text={`${totalPages}`} />{' '}
        </>
      )}
    </div>
  );
};
