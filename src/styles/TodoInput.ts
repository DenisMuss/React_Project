// src/styles/TodoInput.ts
import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4cafe1;
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