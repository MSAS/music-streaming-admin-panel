import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRowItemComponent } from './employee-row-item.component';

describe('EmployeeRowItemComponent', () => {
  let component: EmployeeRowItemComponent;
  let fixture: ComponentFixture<EmployeeRowItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRowItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
