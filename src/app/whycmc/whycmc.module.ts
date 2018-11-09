import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  }
];
@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), NgxPaginationModule]
})
export class WhycmcModule {}
