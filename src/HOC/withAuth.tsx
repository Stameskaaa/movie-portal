import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

export const withAuth = (Component: React.ComponentType) => {
  return (props: any) => {
    const { authorized } = useAppSelector((state) => state.auth);
    if (!authorized) {
      return <Navigate to="/home" replace />;
    }
    return <Component {...props} />;
  };
};
