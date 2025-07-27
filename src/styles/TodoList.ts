import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

export const DeleteButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 8px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;