import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEditorComponent } from './personal-editor.component';

describe('PersonalEditorComponent', () => {
  let component: PersonalEditorComponent;
  let fixture: ComponentFixture<PersonalEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
