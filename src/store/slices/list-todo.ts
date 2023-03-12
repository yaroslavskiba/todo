import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string[][] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string[]>) => {
      state.push(action.payload);
    },
    editElementToDo: (
      state,
      action: PayloadAction<{ listIndex: number; itemIndex: number; stateEditToDO: string }>,
    ) => {
      const { listIndex, itemIndex, stateEditToDO } = action.payload;
      state[listIndex][itemIndex] = stateEditToDO;
    },
    deleteElementToDo: (state, action: PayloadAction<{ listIndex: number; itemIndex: number }>) => {
      const { listIndex, itemIndex } = action.payload;
      state[listIndex].splice(itemIndex, 1);
    },
    deleteListToDo: (state, action: PayloadAction<{ listIndex: number }>) => {
      const { listIndex } = action.payload;
      state.splice(listIndex, 1);
    },
  },
});

export const { addTodo, editElementToDo, deleteElementToDo, deleteListToDo } = todoSlice.actions;
export default todoSlice.reducer;
