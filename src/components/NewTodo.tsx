import {useContext, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {TodosContext} from '../store/todos-context';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const [text, setText] = useState('');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (text.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-3">
      <label htmlFor="text" className="font-medium">
        ToDo label
      </label>
      <Input type="text" id="text" value={text} onChange={(event) => setText(event.target.value)} autoComplete="off" />
      <Button type="submit">Add todo</Button>
    </form>
  );
};

export default NewTodo;
