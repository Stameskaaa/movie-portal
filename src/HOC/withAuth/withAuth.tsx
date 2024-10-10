import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/typedReduxHooks/reduxHook';
import { getCurrentUser } from '../../utils/utils';

export const withAuth = (Component: React.ComponentType) => {
  return (props: any) => {
    const { authorized } = useAppSelector((state) => state.auth);
    const currentUser = getCurrentUser();

    if (!currentUser && !authorized) {
      return <Navigate to="/auth" replace />;
    }
    return <Component {...props} />;
  };
};
