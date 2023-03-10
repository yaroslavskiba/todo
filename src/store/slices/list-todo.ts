import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToDoState {
  todo: string[];
}

const initialState: ToDoState[] = [];

const listTodo = createSlice({
  name: 'create-todo',
  initialState,
  reducers: {
    addNewList(state, action: PayloadAction<string[]>) {
      state.push({ todo: action.payload });
    },
  },
});

export const { addNewList } = listTodo.actions;
export default listTodo.reducer;
