import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodosState = {
  todos: Todo[];
};

const loadFromLocalStorage = (): Todo[] => {
  try {
    const data = localStorage.getItem('todos');
    if (data) return JSON.parse(data);
  } catch {}
  return [];
};

const saveToLocalStorage = (todos: Todo[]) => {
  try {
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch {}
};

const initialState: TodosState = {
  todos: loadFromLocalStorage(),
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      });
      saveToLocalStorage(state.todos);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
      saveToLocalStorage(state.todos);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      saveToLocalStorage(state.todos);
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
      saveToLocalStorage(state.todos);
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;