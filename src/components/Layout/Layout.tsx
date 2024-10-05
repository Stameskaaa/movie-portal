import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import styles from './Layout.module.scss';
import { SideInfo } from '../SideInfo/SideInfo';

export const Layout = () => {
  return (
    <div className={styles.layout_container}>
      <Header />
      <div className={styles.outlet_container}>
        <Outlet />
      </div>
      <SideInfo />
    </div>
  );
};
