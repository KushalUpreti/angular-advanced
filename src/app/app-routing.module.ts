import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './forms/todo/todo.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./forms/void/void.module').then((m) => m.VoidModule),
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('./forms/todo/todo.module').then((m) => m.TodoModule),
  },
  // { path: '', redirectTo: 'todo', pathMatch: 'full' },
  // { path: 'todo', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
