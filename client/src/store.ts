import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import studentSlice from './features/students/studentSlice';
import presentationsSlice from './features/presentations/presentationsSlice';

const store = configureStore({
  reducer: { presentations: presentationsSlice, student: studentSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: <T>(fn: (state: RootState) => T) => T = useSelector;

export default store;
