import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './add-edit-card-dialog.component.html',
  styleUrls: ['./add-edit-card-dialog.component.css']
})
export class AddEditCardDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddEditCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
