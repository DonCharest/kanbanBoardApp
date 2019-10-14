import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-epic-dialog',
  templateUrl: './epic-dialog.component.html',
  styleUrls: ['./epic-dialog.component.css']
})
export class EpicDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EpicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
