import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import alertReducer from './AlertSlice';
import linearLoadReducer from './LinearLoadSlice';
import chamadosReducer from './ChamadosSlice';
import userReducer from './UserSlice';

const store = configureStore({
  reducer: {
    alert: alertReducer,
    linearLoad: linearLoadReducer,
    chamados: chamadosReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
