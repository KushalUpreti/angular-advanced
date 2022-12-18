import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoidComponent } from './void.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: VoidComponent }];

@NgModule({
  declarations: [VoidComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class VoidModule {}
