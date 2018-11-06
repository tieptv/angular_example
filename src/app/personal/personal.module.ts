import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPersonalComponent } from './edit-personal/edit-personal.component';
import { BrowserModule } from '@angular/platform-browser';
import { InsertPersonalComponent } from './insert-personal/insert-personal.component';
import { NgxPaginationModule } from 'ngx-pagination';
const routes: Routes = [
  {
    path: 'personal/:id/edit',
    component: EditPersonalComponent
  },
  {
    path: 'personal/insert',
    component: InsertPersonalComponent
  }
];
@NgModule({
  declarations: [EditPersonalComponent, InsertPersonalComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class PersonalModule {}
