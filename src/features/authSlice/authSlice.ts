import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../types/apiTypes';

const initialState: AuthState = {
  authorized: false,
  userData: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      state.authorized = action.payload.authorized;
      state.userData = action.payload.userData;
    },
    setFavorites: (state, action: PayloadAction<string>) => {
      if (state?.userData) {
        const { favorites } = state.userData;
        if (favorites.includes(action.payload)) {
          state.userData.favorites = favorites.filter((item) => item !== action.payload);
        } else {
          state.userData.favorites.push(action.payload);
        }
      }
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { setUser, setFavorites, logout } = authSlice.actions;

export default authSlice.reducer;
