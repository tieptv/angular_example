import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { InsertComponent } from './video/insert/insert.component';
import { EditComponent } from './video/edit/edit.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'video/insert',
    component: InsertComponent
  }
];
@NgModule({
  declarations: [ListComponent, InsertComponent, EditComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), NgxPaginationModule,MatInputModule,MatSelectModule]
})
export class WhycmcModule {}
