import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@store/types';

// Используем по всему приложению вместо простых `useDispatch` и `useSelector`
// Создаем типизированный dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
// Создаем типизированный selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
