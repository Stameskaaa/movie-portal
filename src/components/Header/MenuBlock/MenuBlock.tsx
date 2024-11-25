import { NavLink, useLocation, useParams, useSearchParams } from 'react-router-dom';
import styles from './MenuBlock.module.scss';
import { ReactElement } from 'react';

interface Query {
  [key: string]: string;
}

interface UrlPath {
  path: string;
  query?: Query;
  full: string;
}

interface listItem {
  text: string;
  icon: ReactElement;
  url: UrlPath;
}

interface Props {
  title: string;
  listItems: listItem[];
}

export const MenuBlock: React.FC<Props> = ({ title, listItems }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const isActive = (url: UrlPath) => {
    const pathMatches = location.pathname === url.path;
    if (url.query) {
      const filterObjToCheck = Object.fromEntries(searchParams.entries());
      const queryMatches = Object.entries(url.query).every(
        ([key, value]) => filterObjToCheck[key] === value,
      );
      return queryMatches && pathMatches;
    }
    return pathMatches;
  };

  return (
    <div className={styles.block_container}>
      <h5>{title}</h5>
      <ul>
        {listItems.map((item, i) => {
          return (
            <NavLink
              key={i}
              className={isActive(item.url) ? styles.active : styles.navlink}
              to={item.url.full}>
              <li>
                <span className={styles.item_icon}>{item.icon}</span>
                <span className={styles.item_text}>{item.text}</span>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};
