import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { setUser } from '../../features/authSlice/authSlice';
import { UserState } from '../../types/apiTypes';
import { foundUserInUserList, regInUserList } from '../../utils/utils';
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
    <div>
      registration form
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registrateAccount(credentials);
        }}>
        <label>
          {' '}
          Login
          <input onChange={handleInputChange} name="login" type="text" />
        </label>

        <label>
          password <input onChange={handleInputChange} name="password" type="password" />
        </label>
        <label>
          repeat password <input onChange={handleInputChange} name="secondPass" type="password" />
        </label>
        <button>registrate</button>
      </form>
      <button onClick={() => navigate('/auth')}>have account?</button>
    </div>
  );
};
