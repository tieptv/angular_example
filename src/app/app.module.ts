import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListPersonalComponent } from './component/personal/list-personal/list-personal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DemoComponent } from './whycmc/demo/demo.component';
import { PersonalModule } from './component/personal/personal.module';
import { WhycmcModule } from './whycmc/whycmc.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const routes: Routes = [
  {
    path: 'personal',
    component: ListPersonalComponent
  },
  {
    path: 'home',
    component: DemoComponent
  }
];
@NgModule({
  declarations: [AppComponent, ListPersonalComponent, DemoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    ReactiveFormsModule,
    PersonalModule,
    WhycmcModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
