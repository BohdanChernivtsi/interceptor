import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItem3Component } from './list-item3.component';

describe('ListItem3Component', () => {
  let component: ListItem3Component;
  let fixture: ComponentFixture<ListItem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItem3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
