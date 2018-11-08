import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  ComponentFactory,
  ComponentRef,
  ViewChildren,
  QueryList
} from '@angular/core';
import { Section1Component } from '../home/section1/section1.component';
import { Section2Component } from '../home/section2/section2.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  entryComponents: [Section1Component, Section2Component]
})
export class HomeComponent implements OnInit {
  componentRef: ComponentRef<any>;
  @ViewChildren(Component)
  sections: QueryList<Component>;
  section: any[] = [Section1Component, Section2Component];
  constructor(private resolver: ComponentFactoryResolver) {}
  ngOnInit() {
    const factory: ComponentFactory<
      any
    > = this.resolver.resolveComponentFactory(this.section[0]);
    // section.viewContainerRef.createComponent(this.textComponentFactory);
    // const factory1: ComponentFactory<
    //    any
    //  > = this.resolver.resolveComponentFactory(Section2Component);
    // this.componentRef = this.container.createComponent(factory);
  }
}
