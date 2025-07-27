import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  padding: 10px;
  width: 250px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #4cafe1;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #3a9ad9;
  }
`;