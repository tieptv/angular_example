import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonalComponent } from './list-personal.component';

describe('ListPersonalComponent', () => {
  let component: ListPersonalComponent;
  let fixture: ComponentFixture<ListPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
