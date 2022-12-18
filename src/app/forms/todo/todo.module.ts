import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { todoFeatureKey, todoReducer } from './store/todo.reducer';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: TodoComponent }];

@NgModule({
  declarations: [TodoComponent],
  exports: [TodoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(todoFeatureKey, todoReducer),
  ],
})
export class TodoModule {}
