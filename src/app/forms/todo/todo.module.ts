import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent],
  exports: [TodoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class TodoModule {}
