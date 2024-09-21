import { useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';

export const useAsyncReq = <T, P = void>(func: (params?: P) => Promise<T>) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<null | Error>(null);

  const clearingHook = () => {
    setLoading(false);
    setData(undefined);
    setError(null);
  };

  const executeAsyncReq = async (params?: P) => {
    try {
      setLoading(true);
      const response = await func(params);
      setError(null); // ошибка иногда не очищается сама
      setData(response);
    } catch (err: any) {
      setError(err);
      setData(undefined); // старые данные не удалились при ошибке
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, executeAsyncReq, setData, clearingHook };
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
