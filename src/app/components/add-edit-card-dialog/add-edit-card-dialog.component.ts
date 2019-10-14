import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Member, Epic } from '../../model/data';
import { DataProviderService } from '../../model/data-provider.service';

@Component({
  selector: 'app-modal',
  templateUrl: './add-edit-card-dialog.component.html',
  styleUrls: ['./add-edit-card-dialog.component.css']
})
export class AddEditCardDialogComponent implements OnInit {
  members: Member[];
  epics: Epic[];

  constructor(
    private provider: DataProviderService,
    public dialogRef: MatDialogRef<AddEditCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.members = this.provider.getMembers();
    this.epics = this.provider.getEpics();
    this.loadFromLocal();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public loadFromLocal() {
    const loadMembers = localStorage.getItem('members');
    if (loadMembers != null) {
      this.members = JSON.parse(loadMembers);
    }
    const loadEpics = localStorage.getItem('epics');
    if (loadEpics != null) {
      this.epics = JSON.parse(loadEpics);
    }
  }
}
