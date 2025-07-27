import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  login: string;
}

const initialState: AuthState = {
  login: localStorage.getItem('login') || '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
      localStorage.setItem('login', action.payload);
    },
    logout: (state) => {
      state.login = '';
      localStorage.removeItem('login');
    },
  },
});

export const { setLogin, logout } = authSlice.actions;
export default authSlice.reducer;