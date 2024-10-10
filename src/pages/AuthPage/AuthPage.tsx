import styles from './AuthPage.module.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { foundUserInUserList, loginUser, clearCurrentUser } from '../../utils/utils';
import { setUser, logout } from '../../features/authSlice/authSlice';
import { Button } from '../../components/Button/Button';
import { FloatingInput } from '../../components/FloatingInput/FloatingInput';
import { useAppDispatch, useAppSelector } from '../../hooks/typedReduxHooks/reduxHook';

interface LoginParams {
  login: string;
  password: string;
}

const AuthPage = () => {
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
      <div className={styles.logout}>
        <h4>You already authorized {userData?.name}</h4>
        <Button onClick={() => unAuthenticated()} text="Logout" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h4>Sign up</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          authenticateUser();
        }}>
        <FloatingInput
          type="text"
          data={credentials.login}
          setData={handleInputChange}
          name="login"
          text="Login"
        />

        <FloatingInput
          type="password"
          data={credentials.password}
          setData={handleInputChange}
          name="password"
          text="password"
        />

        <Button text="Sign up" />
      </form>
      <Button text="Create an Account" onClick={() => navigate('/registration')} />
    </div>
  );
};

export default AuthPage;
