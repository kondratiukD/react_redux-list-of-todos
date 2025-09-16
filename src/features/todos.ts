import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialState: Todo[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todoItem = state.find(todo => todo.id === action.payload);

      if (todoItem) {
        todoItem.completed = !todoItem.completed;
      }
    },
  },
});

export const { setTodos, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
