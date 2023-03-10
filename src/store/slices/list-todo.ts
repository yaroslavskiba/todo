import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToDoState {
  todos: string[];
}

const initialState: ToDoState[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ToDoState>) => {
      state.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
