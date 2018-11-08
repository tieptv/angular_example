import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListPersonalComponent } from './personal/list-personal/list-personal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { DemoComponent } from './whycmc/demo/demo.component';
import { PersonalModule } from './personal/personal.module';
const routes: Routes = [
  {
    path: 'personal',
    component: ListPersonalComponent
  },
  {
    path: 'home',
    component: DemoComponent
  },
  {
    path: 'list',
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
    HomeModule,
    PersonalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
