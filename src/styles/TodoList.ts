// src/styles/TodoList.ts
import styled from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 4px;
`;

export const EditButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 4px;
`;

export const TaskInput = styled.input`
  padding: 5px;
  flex: 1;
  margin-right: 10px;
  font-size: 16px;
`;