import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {describe, expect, it, vi} from 'vitest';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  it('renders todo text', () => {
    render(<TodoItem text="Walk the dog" onRemoveTodo={vi.fn()} />);

    expect(screen.getByText('Walk the dog')).toBeInTheDocument();
  });

  it('calls onRemoveTodo when remove button is clicked', async () => {
    const onRemoveTodo = vi.fn();
    const user = userEvent.setup();

    render(<TodoItem text="Walk the dog" onRemoveTodo={onRemoveTodo} />);

    await user.click(screen.getByRole('button', {name: 'Remove "Walk the dog"'}));

    expect(onRemoveTodo).toHaveBeenCalledOnce();
  });
});
