import { FilterButton } from '../../components/FilterButton/FilterButton';
import { Input } from '../../components/Input/Input';
import { SearchCard } from './SearchCard/SearchCard';

import styles from './SearchPage.module.scss';

export const SearchPage = () => {
  return (
    <div className={styles.page_container}>
      {' '}
      <Input />
      <div className={styles.search_container}>
        <FilterButton text="Films" />

        <FilterButton text="Actors" />
      </div>
      <div className={styles.grid_container}>
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </div>
    </div>
  );
};
