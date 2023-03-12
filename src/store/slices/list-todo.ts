import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string[][] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string[]>) => {
      state.push(action.payload);
    },
    editToDo: (state, action: PayloadAction<{ listIndex: number; itemIndex: number; stateEditToDO: string }>) => {
      const { listIndex, itemIndex, stateEditToDO } = action.payload;
      state[listIndex][itemIndex] = stateEditToDO;
    },
  },
});

export const { addTodo, editToDo } = todoSlice.actions;
export default todoSlice.reducer;
