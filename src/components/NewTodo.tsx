import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    let enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    } else {
      todosCtx.addTodo(enteredText);
      todoTextInputRef.current!.value = '';
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">ToDo label</label>
      <input
        type="text"
        id="text"
        ref={todoTextInputRef}
        autoComplete="off"
      ></input>
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
