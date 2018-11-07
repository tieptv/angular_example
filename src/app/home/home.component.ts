import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { Section1Component } from '../home/section1/section1.component';
import { Section2Component } from '../home/section2/section2.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('parent', { read: ViewContainerRef })
  parent: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(
      Section1Component
    );
    const anotherChildComponent = this.componentFactoryResolver.resolveComponentFactory(
      Section2Component
    );

    this.parent.createComponent(childComponent);
    this.parent.createComponent(anotherChildComponent);
  }
}
