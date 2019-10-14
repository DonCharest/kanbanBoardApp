import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicDialogComponent } from './epic-dialog.component';

describe('EpicDialogComponent', () => {
  let component: EpicDialogComponent;
  let fixture: ComponentFixture<EpicDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
