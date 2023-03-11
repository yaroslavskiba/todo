import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string[][] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string[]>) => {
      state.push(action.payload);
    },
    editToDo: (state, action: PayloadAction<{ itemIndex: number; stateEdiToDO: string }>) => {
      const { itemIndex, stateEdiToDO } = action.payload;
      //TODO: Добавить индекс списка
      state[itemIndex] = stateEdiToDO;
    },
  },
});

export const { addTodo, editToDo } = todoSlice.actions;
export default todoSlice.reducer;
