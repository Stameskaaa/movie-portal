import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice/authSlice';
import { movieApi } from '../services/movieApi/movieApi';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
