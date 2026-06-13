import {useContext} from 'react';
import TodoItem from '../components/TodoItem';
import {TodosContext} from '../store/todos-context';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className="m-0 list-none space-y-3 p-0">
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={() => todosCtx.removeTodo(item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
