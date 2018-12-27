import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIconsComponent } from './group-icons.component';

describe('GroupIconsComponent', () => {
  let component: GroupIconsComponent;
  let fixture: ComponentFixture<GroupIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
