import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCardDialogComponent } from './add-edit-card-dialog.component';

describe('ModalComponent', () => {
  let component: AddEditCardDialogComponent;
  let fixture: ComponentFixture<AddEditCardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditCardDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
