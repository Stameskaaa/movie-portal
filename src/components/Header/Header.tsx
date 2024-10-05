import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logout } from '../../features/authSlice/authSlice';
import { clearCurrentUser } from '../../utils/utils';
import styles from './Header.module.scss';
import { MenuBlock } from './MenuBlock/MenuBlock';
import { TiHome } from 'react-icons/ti';
import { FaFire } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';
import { FaChildren } from 'react-icons/fa6';
import { FaMagic } from 'react-icons/fa';
import { MdFace3 } from 'react-icons/md';
import { RiSettings3Fill } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa';
import { PiFilmReelFill } from 'react-icons/pi';
import { IoIosSearch } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';
const menu = {
  title: 'MENU',

  listItems: [
    {
      text: 'Home',
      icon: <TiHome />,
      path: 'home',
    },
    {
      text: 'Search',
      icon: <IoIosSearch />,
      path: 'search',
    },
    {
      text: 'Favorites',
      icon: <MdFavorite />,
      path: 'favorites',
    },
    {
      text: 'Trending now',
      icon: <FaFire />,
      path: 'Trendingnow',
    },
  ],
};

const popularGenre = {
  title: 'POPULAR GENRES',
  listItems: [
    {
      text: 'Comedy',
      icon: <FaSmile />,
      path: 'search/comedy',
    },
    {
      text: 'Cartoons',
      icon: <FaChildren />,
      path: 'search/cartoons',
    },
    {
      text: 'Fantasy',
      icon: <FaMagic />,
      path: 'search/fantasy',
    },
    {
      text: 'Biography',
      icon: <MdFace3 />,
      path: 'search/biography',
    },
  ],
};

const general = {
  title: 'GENERAL',
  listItems: [
    {
      text: 'Profile',
      icon: <RiSettings3Fill />,
      path: 'Profile',
    },
    {
      text: 'Logout',
      icon: <FiLogOut />,
      path: 'auth',
    },
    {
      text: 'Admin Panel',
      icon: <FaLock />,
      path: 'AdminPanel',
    },
  ],
};

export const Header = () => {
  const { authorized, userData } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    clearCurrentUser();
  };

  return (
    <header className={styles.header}>
      <nav>
        <Link to="/" className={styles.logo}>
          <PiFilmReelFill size={30} color="#a00000" />
          <h3>MOVIE PORTAL</h3>
        </Link>

        <MenuBlock title={menu.title} listItems={menu.listItems} />
        <MenuBlock title={popularGenre.title} listItems={popularGenre.listItems} />
        <MenuBlock title={general.title} listItems={general.listItems} />
      </nav>
    </header>
  );
};
