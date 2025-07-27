import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import { PageWrapper } from '../styles/TodoPage';

const TodosPage = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <PageWrapper>
      <Header />
      <TodoList />
    </PageWrapper>
  );
};

export default TodosPage;