import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [DemoComponent, ListComponent],
  imports: [CommonModule]
})
export class WhycmcModule {}
