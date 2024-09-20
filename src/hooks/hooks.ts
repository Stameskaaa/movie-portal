import { useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';

export const useAsyncReq = <T, P = void>(func: (params?: P) => Promise<T>) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<null | Error>(null);

  const executeAsyncReq = async (params?: P) => {
    try {
      setLoading(true);
      const response = await func(params);
      setData(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, executeAsyncReq };
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
