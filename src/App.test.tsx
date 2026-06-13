import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {describe, expect, it} from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the todos heading and an empty list', () => {
    render(<App />);

    expect(screen.getByText('Todos')).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('adds a todo when the form is submitted', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(screen.getByLabelText('ToDo label'), 'Buy milk');
    await user.click(screen.getByRole('button', {name: 'Add todo'}));

    expect(screen.getByText('Buy milk')).toBeInTheDocument();
    expect(screen.getByLabelText('ToDo label')).toHaveValue('');
  });

  it('does not add a todo when the input is empty', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole('button', {name: 'Add todo'}));

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('removes a todo when the remove button is clicked', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(screen.getByLabelText('ToDo label'), 'Buy milk');
    await user.click(screen.getByRole('button', {name: 'Add todo'}));
    await user.click(screen.getByRole('button', {name: 'Remove "Buy milk"'}));

    expect(screen.queryByText('Buy milk')).not.toBeInTheDocument();
  });
});
