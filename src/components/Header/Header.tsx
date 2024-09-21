import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logout } from '../../features/authSlice/authSlice';
import { clearCurrentUser } from '../../utils/utils';
import styles from './Header.module.scss';
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
        <NavLink to="/" className="logo">
          LOGO
        </NavLink>

        {authorized ? (
          <>
            <NavLink to="/favorites" className="nav-link">
              Favorites
            </NavLink>
            <button onClick={handleLogout} className="logout-button">
              Leave
            </button>
            <span>{userData?.name}</span>
          </>
        ) : (
          <NavLink to="/authorization" className="nav-link">
            Sign in
          </NavLink>
        )}
      </nav>
    </header>
  );
};
