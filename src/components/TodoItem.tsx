import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item}>
      <span>{props.text}</span>
      <span onClick={props.onRemoveTodo} className={classes.removeIcon}>
        X
      </span>
    </li>
  );
};

export default TodoItem;
