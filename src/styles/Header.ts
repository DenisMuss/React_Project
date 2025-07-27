import styled from 'styled-components';

export const Bar = styled.header`
  background: #4cafe1;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;