import { createAction, props } from '@ngrx/store';
import { Todo } from '../todo.interface';

export const saveOrUpdateTodo = createAction(
  '[Todo Component] Update Todo',
  props<{ todo: Todo; isUpdate: boolean }>()
);

export const deleteTodo = createAction(
  '[Todo Component] Delete Todo',
  props<{ todoId: number }>()
);

export const setTodos = createAction(
  '[Todo Component] Set Todos',
  props<{ todos: Todo[] }>()
);
