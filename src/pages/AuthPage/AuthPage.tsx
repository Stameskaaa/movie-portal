import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import styles from './AuthPage.module.scss';
import { foundUserInUserList, loginUser, clearCurrentUser } from '../../utils/utils';
import { setUser, logout } from '../../features/authSlice/authSlice';

interface LoginParams {
  login: string;
  password: string;
}

export const AuthPage = () => {
  const [credentials, setCredentials] = useState<LoginParams>({
    login: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { authorized, userData } = useAppSelector((state) => state.auth);

  const authenticateUser = () => {
    //TODO validate
    const existUser = foundUserInUserList(credentials.login);
    if (existUser) {
      loginUser(credentials.login, credentials.password);
      dispatch(
        setUser({ authorized: true, userData: { ...existUser, password: credentials.password } }),
      );
      console.log('success login');
      navigate('/');
    } else {
      console.log('error login');
    }
  };

  const unAuthenticated = () => {
    clearCurrentUser();
    dispatch(logout());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  if (authorized) {
    return (
      <div>
        Вы уже авторизованы, {userData?.name}{' '}
        <button onClick={() => unAuthenticated()}>Logout</button>
      </div>
    );
  }

  return (
    <div className={styles.page_container}>
      Enter user data
      <form
        onSubmit={(e) => {
          e.preventDefault();
          authenticateUser();
        }}>
        <label>
          Login
          <input onChange={handleInputChange} name="login" type="text" />
        </label>

        <label>
          password <input onChange={handleInputChange} name="password" type="password" />
        </label>

        <button>auth</button>
      </form>
      <button onClick={() => navigate('/registration')}>need registrate?</button>
    </div>
  );
};
