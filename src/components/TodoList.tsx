// src/components/TodoList.tsx
import React, { useState, useEffect } from 'react';
import { ListItem, DeleteButton, EditButton, TaskInput } from '../styles/TodoList';
import TodoInput from './TodoInput';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedText, setEditedText] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (index: number) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditedText(todos[index]);
  };

  const handleSave = (index: number) => {
    const updated = [...todos];
    updated[index] = editedText;
    setTodos(updated);
    setEditingIndex(null);
  };

  const handleAdd = (text: string) => {
    setTodos([...todos, text]);
  };

  return (
    <>
      <TodoInput onAdd={handleAdd} />
      {todos.map((todo, index) => (
        <ListItem key={index}>
          {editingIndex === index ? (
            <>
              <TaskInput
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <EditButton onClick={() => handleSave(index)}>Сохранить</EditButton>
            </>
          ) : (
            <>
              <span>{todo}</span>
              <EditButton onClick={() => handleEdit(index)}>Редактировать</EditButton>
            </>
          )}
          <DeleteButton onClick={() => handleDelete(index)}>Удалить</DeleteButton>
        </ListItem>
      ))}
    </>
  );
};

export default TodoList;

