import { useAppSelector } from '../typedReduxHooks/reduxHook';
import { addFavorite, deleteFavorite } from '../../features/authSlice/authSlice';
import { useAppDispatch } from '../typedReduxHooks/reduxHook';
import { changeFavoriteList } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useFavorite = (id: string | undefined) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userData, authorized } = useAppSelector((state) => state.auth);
  const [inFavorite, setInFavorite] = useState(false);

  useEffect(() => {
    if (userData?.favorites && authorized && id) {
      setInFavorite(userData.favorites.includes(id));
    } else {
      setInFavorite(false);
    }
  }, [userData, authorized, id]);

  const addInFavorite = () => {
    if (userData?.name && authorized && id) {
      if (inFavorite) {
        setInFavorite(false);
        dispatch(deleteFavorite(id));
        changeFavoriteList(userData.name, id, false);
      } else {
        setInFavorite(true);
        dispatch(addFavorite(id));
        changeFavoriteList(userData.name, id, true);
      }
    } else {
      navigate('/auth');
    }
  };

  return { inFavorite, addInFavorite };
};
