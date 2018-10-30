import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItem2Component } from './list-item2.component';

describe('ListItem2Component', () => {
  let component: ListItem2Component;
  let fixture: ComponentFixture<ListItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
