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
      url: { path: '/home', full: '/home' },
    },
    {
      text: 'Search',
      icon: <IoIosSearch />,
      url: { path: '/search', query: { genre: 'ALL' }, full: '/search?genre=ALL' },
    },
    {
      text: 'Favorites',
      icon: <MdFavorite />,
      url: { path: '/favorites', full: '/favorites' },
    },
    {
      text: 'Trending now',
      icon: <FaFire />,
      url: { path: '/trendingnow', full: '/trendingnow' },
    },
  ],
};

const popularGenre = {
  title: 'POPULAR GENRES',
  listItems: [
    {
      text: 'Comedy',
      icon: <FaSmile />,
      url: { path: '/search', query: { genre: '13' }, full: '/search?genre=13' },
    },
    {
      text: 'Children',
      icon: <FaChildren />,
      url: { path: '/search', query: { genre: '33' }, full: '/search?genre=33' },
    },
    {
      text: 'Fantasy',
      icon: <FaMagic />,
      url: { path: '/search', query: { genre: '12' }, full: '/search?genre=12' },
    },
    {
      text: 'Biography',
      icon: <MdFace3 />,
      url: { path: '/search', query: { genre: '8' }, full: '/search?genre=8' },
    },
  ],
};

export const Header = () => {
  const { authorized } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    clearCurrentUser();
  };

  const general = {
    title: 'GENERAL',
    listItems: [
      {
        text: 'Profile',
        icon: <RiSettings3Fill />,
        url: { path: '/profile', full: '/profile' },
      },
      {
        text: authorized ? 'Logout' : 'Login',
        icon: <FiLogOut />,
        url: { path: '/auth', full: '/auth' },
      },
      {
        text: 'Admin Panel',
        icon: <FaLock />,
        url: { path: '/adminpanel', full: '/adminpanel' },
      },
    ],
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
