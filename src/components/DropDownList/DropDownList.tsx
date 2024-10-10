import styles from './DropDownList.module.scss';
import { FilterDataList, FilterDataItem } from '../../types/apiTypes';
import { capitalizeFirstLetter } from '../../utils/utils';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { TypeKey } from '../../types/apiTypes';
interface Props {
  items: FilterDataList;
  defaultVal: FilterDataItem;
  type: TypeKey;
  title: string;
}

export const DropDownList: React.FC<Props> = ({ items, type, defaultVal, title }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentFilter, setCurrentFilter] = useState<FilterDataItem>(defaultVal);

  const handleFilterChange = (item: any) => {
    setCurrentFilter(item);
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, item.id);
    setSearchParams(params);
  };

  return (
    <>
      <div className={styles.dropdown}>
        <h4>{title}</h4>
        <div className={styles.title}>{capitalizeFirstLetter(currentFilter.eng)}</div>
        <div className={styles.dropdown_content}>
          {items.map((item, i) =>
            item.eng ? (
              <p onClick={() => handleFilterChange(item)} key={i}>
                {capitalizeFirstLetter(item.eng)}
              </p>
            ) : null,
          )}
        </div>
      </div>
    </>
  );
};
