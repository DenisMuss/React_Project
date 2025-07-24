import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    margin: 20px;
    padding: 15px;
  }
`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos([...todos, text]);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>📝 Мой ToDo List</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} />
      </Container>
    </>
  );
};

export default App;