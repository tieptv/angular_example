import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditPersonalComponent } from './edit-personal/edit-personal.component';
import { ListPersonalComponent } from './list-personal/list-personal.component';
const routes: Routes =[


];
@NgModule({
  declarations: [EditPersonalComponent],
  imports: [
    CommonModule
  ]
})
export class PersonalModule { }
