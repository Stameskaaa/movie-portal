import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { foundUser, setUserInLocalStorage } from '../../utils/utils';
import { useAppDispatch } from '../../hooks/hooks';
import { UserState } from '../../types/apiTypes';
import { setUser } from '../../features/authSlice/authSlice';

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

  const saveUser = (foundedUser: UserState) => {
    console.log('success login');
    dispatch(setUser({ authorized: true, userData: foundedUser }));
    setUserInLocalStorage(foundedUser);
    navigate('/');
  };

  const isAuthenticated = () => {
    if (credentials.login && credentials.password) {
      const foundedUser = foundUser(credentials.login);
      foundedUser?.password === credentials.password
        ? saveUser(foundedUser)
        : console.log('error login');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      Enter user data
      <form
        onSubmit={(e) => {
          e.preventDefault();
          isAuthenticated();
        }}>
        <label>
          {' '}
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
