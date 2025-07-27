import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { addTodo, deleteTodo, toggleTodo, editTodo } from './store/todosSlice';

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

const App = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>📝 Мой ToDo List</h1>
        <TodoInput onAdd={(text) => dispatch(addTodo(text))} />
        <TodoList
          todos={todos}
          onDelete={(id) => dispatch(deleteTodo(id))}
          onToggle={(id) => dispatch(toggleTodo(id))}
          onEdit={(id, text) => dispatch(editTodo({ id, text }))}
        />
      </Container>
    </>
  );
};

export default App;