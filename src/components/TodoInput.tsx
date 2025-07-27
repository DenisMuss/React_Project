// src/components/TodoInput.tsx
import React, { useState } from 'react';
import { InputWrapper, Input, Button } from '../styles/TodoInput';

type TodoInputProps = {
  onAdd: (text: string) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="Введите задачу..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleAdd}>Добавить</Button>
    </InputWrapper>
  );
};

export default TodoInput;