import {describe, expect, it, vi} from 'vitest';
import Todo from './todo';

describe('Todo', () => {
  it('creates a todo with text and a timestamp id', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-06-13T12:00:00.000Z'));

    const todo = new Todo('Buy milk');

    expect(todo.text).toBe('Buy milk');
    expect(todo.id).toBe('2026-06-13T12:00:00.000Z');

    vi.useRealTimers();
  });
});
