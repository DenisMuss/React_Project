// src/components/TodoList.tsx

import React from 'react';
import { ListItem, DeleteButton } from '../styles/TodoList';

const TodoList = () => {
  const handleDelete = () => {
    console.log('Удаление задачи'); // В будущем будет удаление по id
  };

  return (
    <ListItem>
      <span>Текст задачи</span>
      <DeleteButton onClick={handleDelete}>УДАЛИТЬ</DeleteButton>
    </ListItem>
  );
};

export default TodoList;