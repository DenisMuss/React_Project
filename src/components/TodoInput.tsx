import React, { useState } from "react";
import styled from "styled-components";

type TodoInputProps = {
  onAdd: (text: string) => void;
};

const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4cafef;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #3ca0d9;
  }

  @media (max-width: 600px) {
    padding: 8px 16px;
  }
`;

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите задачу..."
      />
      <Button onClick={handleAdd}>Добавить</Button>
    </InputWrapper>
  );
};

export default TodoInput;

export {}