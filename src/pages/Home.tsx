import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Input, Button } from '../styles/Home';

const Home = () => {
  const [loginInput, setLoginInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginInput.trim()) {
      dispatch(setLogin(loginInput));
      localStorage.setItem('login', loginInput);
      navigate('/todos');
    }
  };

  return (
    <Wrapper>
      <h2>Введите логин</h2>
      <Input
        value={loginInput}
        onChange={(e) => setLoginInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
        placeholder="Введите логин..."
      />
      <Button onClick={handleLogin}>Войти</Button>
    </Wrapper>
  );
};

export default Home;