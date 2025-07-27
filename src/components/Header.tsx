import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { setLogin } from '../store/authSlice';
import { Bar, LogoutButton } from '../styles/Header';

const Header = () => {
  const login = useSelector((state: RootState) => state.auth.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLogin(''));
    localStorage.removeItem('login');
    alert('Вы вышли из системы');
    navigate('/');
  };

  return (
    <Bar>
      Вошли как: <strong>{login || 'Гость'}</strong>
      {login && <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>}
    </Bar>
  );
};

export default Header;