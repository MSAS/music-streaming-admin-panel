import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentEditorComponent } from './employment-editor.component';

describe('EmploymentEditorComponent', () => {
  let component: EmploymentEditorComponent;
  let fixture: ComponentFixture<EmploymentEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
