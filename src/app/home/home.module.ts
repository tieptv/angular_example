import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { HomeDirective } from './home.directive';

@NgModule({
  declarations: [
    HomeComponent,
    Section1Component,
    Section2Component,
    HomeDirective
  ],
  imports: [CommonModule, BrowserModule],
  providers: [],
  entryComponents: [HomeComponent, Section1Component, Section2Component]
})
export class HomeModule {}
