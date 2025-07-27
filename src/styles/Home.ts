import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 400px;
  margin: 100px auto;
  text-align: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4cafe1;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3ca0d9;
  }
`;