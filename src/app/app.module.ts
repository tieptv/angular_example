import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonalModule } from './personal/personal.module';
import { ListPersonalComponent } from './personal/list-personal/list-personal.component';
import { NgxPaginationModule } from 'ngx-pagination';
const routes: Routes = [
  {
    path: 'personal',
    component: ListPersonalComponent
  }
];
@NgModule({
  declarations: [AppComponent, ListPersonalComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    PersonalModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
