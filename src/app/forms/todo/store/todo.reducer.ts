import * as TodoActions from './todo.actions';
import { createReducer, on } from '@ngrx/store';
import { Todo } from '../todo.interface';
import { cloneDeep } from 'lodash';

export interface TodoState {
  todos: Todo[];
}

export const todoInitialState: TodoState = {
  todos: [],
};

export const todoFeatureKey = 'todoState';

export const todoReducer = createReducer(
  todoInitialState,
  on(TodoActions.setTodos, (state, payload) => {
    const todos = payload.todos;
    return { ...state, todos };
  }),
  on(TodoActions.saveOrUpdateTodo, (state, payload) => {
    const todos = payload.isUpdate
      ? state.todos.map((todo) =>
          todo.id === payload.todo.id ? { ...todo, done: !todo.done } : todo
        )
      : [...state.todos, payload.todo];
    return { ...state, todos };
  }),
  on(TodoActions.deleteTodo, (state, payload) => {
    const todo = state.todos.find((todo) => todo.id === payload.todoId);
    if (todo) {
      const stateCopy = cloneDeep(state);
      const index = stateCopy.todos.findIndex(
        (todo) => todo.id === payload.todoId
      );
      stateCopy.todos.splice(index, 1);
      return { ...state, todos: stateCopy.todos };
    }
    return state;
  })
);
