import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TodosPage from './pages/TodosPage';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const App = () => {
  const login = useSelector((state: RootState) => state.auth.login);

  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {login && <Route path="/todos" element={<TodosPage />} />}
      </Routes>
  );
};

export default App;