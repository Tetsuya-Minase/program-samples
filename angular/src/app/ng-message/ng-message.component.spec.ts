import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMessageComponent } from './ng-message.component';

describe('NgMessageComponent', () => {
  let component: NgMessageComponent;
  let fixture: ComponentFixture<NgMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
