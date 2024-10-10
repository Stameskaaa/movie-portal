import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../features/authSlice/authSlice';
import { foundUserInUserList, regInUserList } from '../../utils/utils';
import { FloatingInput } from '../../components/FloatingInput/FloatingInput';
import { Button } from '../../components/Button/Button';
import styles from './RegistationPage.module.scss';
import { useAppDispatch } from '../../hooks/typedReduxHooks/reduxHook';

interface ValidateResult {
  success: boolean;
  message: string;
}

interface RegistrateParams {
  login: string;
  password: string;
  secondPass: string;
}

export const RegistationPage = () => {
  const [credentials, setCredentials] = useState<RegistrateParams>({
    login: '',
    password: '',
    secondPass: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registrateAccount = ({ login, password, secondPass }: RegistrateParams) => {
    const isValidLog = validateLogin(login);
    const isValidPass = validatePassword(password, secondPass);

    if (isValidLog.success && isValidPass.success) {
      dispatch(setUser({ authorized: true, userData: { name: login, password, favorites: [] } }));
      regInUserList(login, password);
      console.log('Account succesfuly registrated');
      navigate('/');
    } else {
      console.log(!isValidLog.success && isValidLog.message);
      console.log(!isValidPass.success && isValidPass.message);
    }
  };

  const validateLogin = (log: string): ValidateResult => {
    log = log.replace(/\s+/g, '');

    if (foundUserInUserList(log)) {
      return { success: false, message: 'Current account have been registrated' };
    }

    if (log.length < 5) {
      return { success: false, message: 'Login is too short' };
    }
    return { success: true, message: '' };
  };

  const validatePassword = (pass1: string, pass2: string): ValidateResult => {
    pass1 = pass1.replace(/\s+/g, '');
    pass2 = pass2.replace(/\s+/g, '');

    if (pass1.length < 8) {
      return { success: false, message: 'Password is too short' };
    }

    if (pass1 !== pass2) {
      return { success: false, message: 'Passwords do not match' };
    }

    const hasLetter = /[A-Za-z]/.test(pass1);
    const hasNumber = /[0-9]/.test(pass1);

    if (!hasLetter || !hasNumber) {
      return {
        success: false,
        message: 'Password must contain at least one letter and one number',
      };
    }

    return { success: true, message: '' };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <h4>Registration</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registrateAccount(credentials);
        }}>
        <FloatingInput
          data={credentials.login}
          text="Login"
          type="text"
          setData={handleInputChange}
          name="login"
        />

        <FloatingInput
          data={credentials.password}
          text="password"
          type="password"
          setData={handleInputChange}
          name="password"
        />
        <FloatingInput
          data={credentials.secondPass}
          text="repeat password"
          type="password"
          setData={handleInputChange}
          name="secondPass"
        />

        <Button text="Registrate" />
      </form>
      <Button text="Have account?" onClick={() => navigate('/auth')} />
    </div>
  );
};
