import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSummaryComponent } from './doc-summary.component';

describe('DocSummaryComponent', () => {
  let component: DocSummaryComponent;
  let fixture: ComponentFixture<DocSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
