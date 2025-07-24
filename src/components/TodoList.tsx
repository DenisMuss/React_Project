import React from "react";
import styled from "styled-components";

type TodoListProps = {
  todos: string[];
  onDelete: (index: number) => void;
};

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const DeleteButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d9363e;
  }

  @media (max-width: 600px) {
    padding: 4px 8px;
  }
`;

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => (
  <List>
    {todos.map((todo, index) => (
      <ListItem key={index}>
        {todo}
        <DeleteButton onClick={() => onDelete(index)}>Удалить</DeleteButton>
      </ListItem>
    ))}
  </List>
);

export default TodoList;

export {}