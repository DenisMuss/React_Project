import Header from '../components/Header';
import TodoList from '../components/TodoList';
import { PageWrapper } from '../styles/TodoPage';


const TodosPage = () => {
 return (
    <PageWrapper>
        <Header />
        <TodoList />
    </PageWrapper>
    );
};

export default TodosPage;