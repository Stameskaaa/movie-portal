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
    addFavorite: (state, action: PayloadAction<string>) => {
      state.userData?.favorites.push(action.payload);
    },
    deleteFavorite: (state, action: PayloadAction<string>) => {
      if (state.userData) {
        state.userData.favorites = state.userData?.favorites.filter(
          (innerID) => innerID !== action.payload,
        );
      }
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { setUser, logout, addFavorite, deleteFavorite } = authSlice.actions;

export default authSlice.reducer;
