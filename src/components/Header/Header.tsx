import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logout } from '../../features/authSlice/authSlice';
import { clearCurrentUser } from '../../utils/utils';

export const Header = () => {
  const { authorized, userData } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    clearCurrentUser();
  };

  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">
          LOGO
        </NavLink>
        <div className="nav-links">
          {authorized ? (
            <>
              <NavLink to="/favorites" className="nav-link">
                Favorites
              </NavLink>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
              <span className="user-name">{userData?.name}</span>
            </>
          ) : (
            <NavLink to="/authorization" className="nav-link">
              Sign in
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};
