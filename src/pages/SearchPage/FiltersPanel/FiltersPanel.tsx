import { DropDownList } from '../../../components/DropDownList/DropDownList';
import { FilterButton } from '../../../components/FilterButton/FilterButton';
import { genreList, typeList, orderList } from '../../../services/constants/apiConstants';
import styles from './FiltersPanel.module.scss';
import { SearchString } from '../../../types/apiTypes';

interface Props {
  data: SearchString;
  setData: React.Dispatch<React.SetStateAction<SearchString>>;
}

export const FiltersPanel: React.FC<Props> = ({ data, setData }) => {
  return (
    <div className={styles.search_container}>
      <DropDownList
        defaultVal={{ eng: 'All', ru: 'Все', id: '999' }}
        type="type"
        items={typeList}
      />
      <FilterButton text="Films" />

      <FilterButton text="Actors" />
      <DropDownList
        defaultVal={{ eng: 'Rating', ru: 'Рейтинг', id: '999' }}
        type="order"
        items={orderList}
      />

      <DropDownList
        defaultVal={{ eng: 'All genre', ru: 'Все жанры', id: '999' }}
        type="genre"
        items={genreList}
      />
    </div>
  );
};
