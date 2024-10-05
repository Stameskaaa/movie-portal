import { NavLink } from 'react-router-dom';
import styles from './MenuBlock.module.scss';
import { ReactElement } from 'react';

interface listItem {
  text: string;
  icon: ReactElement;
  path: string;
}

interface Props {
  title: string;
  listItems: listItem[];
}

export const MenuBlock: React.FC<Props> = ({ title, listItems }) => {
  return (
    <div className={styles.block_container}>
      <h5>{title}</h5>
      <ul>
        {listItems.map((item, i) => (
          <NavLink
            key={i}
            className={({ isActive }) => (isActive ? styles.active : styles.navlink)}
            to={item.path}>
            <li>
              <span className={styles.icon}>{item.icon}</span>
              {item.text}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
