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

    logout: () => {
      return initialState;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
