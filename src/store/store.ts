import { configureStore } from '@reduxjs/toolkit';
import reducerTodo from './slices/list-todo';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    listToDo: reducerTodo,
  },
});

export default store;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
