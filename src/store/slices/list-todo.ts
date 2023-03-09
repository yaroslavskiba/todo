import { createSlice } from '@reduxjs/toolkit';

interface typeToDoState {
  [key: string]: any;
}
const initialState: Array<typeToDoState> = [];

const listTodo = createSlice({
  name: 'create-todo',
  initialState: initialState,
  reducers: {
    addNewList(state, action) {},
    addNewToDO(state, action) {},
  },
});

export default listTodo;
