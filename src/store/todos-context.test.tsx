import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useContext} from 'react';
import {describe, expect, it} from 'vitest';
import TodosContextProvider, {TodosContext} from './todos-context';

function ContextProbe() {
  const ctx = useContext(TodosContext);

  return (
    <div>
      <output aria-label="todo count">{ctx.items.length}</output>
      <button type="button" onClick={() => ctx.addTodo('First todo')}>
        Add context todo
      </button>
      <button type="button" onClick={() => ctx.items[0] && ctx.removeTodo(ctx.items[0].id)}>
        Remove first todo
      </button>
      <ul>
        {ctx.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

describe('TodosContextProvider', () => {
  it('starts with an empty todo list', () => {
    render(
      <TodosContextProvider>
        <ContextProbe />
      </TodosContextProvider>,
    );

    expect(screen.getByLabelText('todo count')).toHaveTextContent('0');
  });

  it('adds todos through context', async () => {
    const user = userEvent.setup();

    render(
      <TodosContextProvider>
        <ContextProbe />
      </TodosContextProvider>,
    );

    await user.click(screen.getByRole('button', {name: 'Add context todo'}));

    expect(screen.getByLabelText('todo count')).toHaveTextContent('1');
    expect(screen.getByText('First todo')).toBeInTheDocument();
  });

  it('removes todos through context', async () => {
    const user = userEvent.setup();

    render(
      <TodosContextProvider>
        <ContextProbe />
      </TodosContextProvider>,
    );

    await user.click(screen.getByRole('button', {name: 'Add context todo'}));
    await user.click(screen.getByRole('button', {name: 'Remove first todo'}));

    expect(screen.getByLabelText('todo count')).toHaveTextContent('0');
    expect(screen.queryByText('First todo')).not.toBeInTheDocument();
  });
});
