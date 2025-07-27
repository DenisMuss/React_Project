import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../store/authSlice';
import {
  LoginFormContainer,
  LoginInput,
  LoginButton,
} from '../styles/LoginForm';

const LoginForm = () => {
  const [loginInput, setLoginInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const savedLogin = localStorage.getItem('login');
    if (savedLogin) {
      dispatch(setLogin(savedLogin));
      navigate('/todos');
    }
  }, [dispatch, navigate]);

  const handleLogin = () => {
    if (loginInput.trim()) {
      dispatch(setLogin(loginInput));
      localStorage.setItem('login', loginInput);
      navigate('/todos');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <LoginFormContainer>
      <LoginInput
        value={loginInput}
        onChange={(e) => setLoginInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Введите логин"
      />
      <LoginButton onClick={handleLogin}>Войти</LoginButton>
    </LoginFormContainer>
  );
};

export default LoginForm;