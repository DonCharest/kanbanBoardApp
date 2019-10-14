import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddEditCardDialogComponent } from '../add-edit-card-dialog/add-edit-card-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MemberDialogComponent } from '../member-dialog/member-dialog.component';
import { EpicDialogComponent } from '../epic-dialog/epic-dialog.component';
import { Member, Epic, Card } from '../model/data';
import { DataProviderService } from '../model/data-provider.service';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {
  todo: Card[];
  wip: Card[];
  review: Card[];
  accepted: Card[];

  members: Member[];
  epics: Epic[];

  title: string;
  priority: string;
  assignedTo: string;
  type: string;
  color: string;
  comments: string;
  epicLink: string;

  id: string;
  count: any;

  constructor(private provider: DataProviderService, public dialog: MatDialog) {
    // Set counter from LS - if available
    this.count = localStorage.getItem('count');
    // Otherwise start at 1
    if (this.count === null) {
      this.count = 1;

      const num: number = this.count;
      this.count = this.leftFillNum(num, 6);
    }

    this.todo = [];
    this.wip = [];
    this.review = [];
    this.accepted = [];
  }

  ngOnInit() {
    this.members = this.provider.getMembers();
    this.epics = this.provider.getEpics();
    this.todo = this.provider.getTodos();
    this.wip = this.provider.getWips();
    this.review = this.provider.getReviews();
    this.accepted = this.provider.getAccepteds();

    this.loadFromLocal();
  }

  // function to pad string
  public leftFillNum(num: any, targetLength: any) {
    return num.toString().padStart(targetLength, 0);
  }

  // function to calculate and update the index of the card after being moved in current array,
  // or droped into a new array
  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.saveToLocal();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.saveToLocal();
    }
  }

  /* Modal props to edit cards */
  public openDialogEdit(
    title: string,
    priority: string,
    assignedTo: string,
    type: string,
    index: number,
    id: string,
    color: string,
    comments: string,
    epicLink: string
  ): void {
    const dialogRef = this.dialog.open(AddEditCardDialogComponent, {
      width: '450px',
      data: {
        title,
        priority,
        assignedTo,
        type,
        index,
        id,
        color,
        comments,
        epicLink
      }
    });
    console.log('id: ' + id);
    dialogRef.afterClosed().subscribe(data => {
      const obj = {
        id: data.id,
        title: data.title,
        priority: data.priority,
        assignedTo: data.assignedTo,
        type: data.type,
        color: data.color,
        comments: data.comments,
        epicLink: data.epicLink
      };

      if (this.todo.some(data => data.id === id)) {
        this.todo.splice(index, 1, obj);
        this.saveToLocal();
      } else if (this.wip.some(data => data.id === id)) {
        this.wip.splice(index, 1, obj);
        this.saveToLocal();
      } else if (this.review.some(data => data.id === id)) {
        this.review.splice(index, 1, obj);
        this.saveToLocal();
      } else if (this.accepted.some(data => data.id === id)) {
        this.accepted.splice(index, 1, obj);
        this.saveToLocal();
      }
    });
  }

  /* Modal props to create new cards */
  public openDialog(): void {
    const dialog = this.dialog.open(AddEditCardDialogComponent, {
      width: '450px',
      data: {}
    });

    dialog.afterClosed().subscribe(data => {
      this.todo.push({
        id: 'PROJ-' + this.count,
        title: data.title,
        priority: data.priority,
        assignedTo: data.assignedTo,
        type: data.type,
        color: data.color,
        comments: data.comments,
        epicLink: data.epicLink
      });

      this.count++;
      this.count = this.leftFillNum(this.count, 6);
      this.saveToLocal();
    });
  }

  /* Dialog to add new epic */
  public openNewEpicDialog(): void {
    const dialog = this.dialog.open(EpicDialogComponent, {
      width: '450px',
      data: {}
    });
    dialog.afterClosed().subscribe(data => {
      this.epics.push({
        title: data.epicName
      });
      this.saveToLocal();
    });
  }

  /* Dialog to add new member */
  public openNewMemberDialog(): void {
    const dialog = this.dialog.open(MemberDialogComponent, {
      width: '450px',
      data: {}
    });
    dialog.afterClosed().subscribe(data => {
      this.members.push({
        name: data.memberName
      });
      this.saveToLocal();
    });
  }

  /* Confirm Delete Dialog */
  public openDialogConfirm(i: number, id: string): void {
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: {
        message: `Are you sure you want to delete ${id}?`,
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    dialog.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        if (this.todo.some(data => data.id === id)) {
          this.removeToDo(i);
        }
        if (this.wip.some(data => data.id === id)) {
          this.removeWiP(i);
        }
        if (this.review.some(data => data.id === id)) {
          this.removeReview(i);
        }
        if (this.accepted.some(data => data.id === id)) {
          this.removeAccepted(i);
        }
        if (this.members.some(data => data.name === id)) {
          this.removeMember(i);
        }
        if (this.epics.some(data => data.title === id)) {
          this.removeEpic(i);
        } else {
          console.log(`${id} could not be deleted`);
        }
      }
    });
  }

  // methods to remove members
  public removeMember(index: number) {
    this.members.splice(index, 1);
    this.saveToLocal();
  }

  // methods to remove members
  public removeEpic(index: number) {
    this.epics.splice(index, 1);
    this.saveToLocal();
  }

  // methods to remove cards
  public removeToDo(index: number) {
    this.todo.splice(index, 1);
    this.saveToLocal();
  }
  public removeWiP(index: number) {
    this.wip.splice(index, 1);
    this.saveToLocal();
  }
  public removeReview(index: number) {
    this.review.splice(index, 1);
    this.saveToLocal();
  }
  public removeAccepted(index: number) {
    this.accepted.splice(index, 1);
    this.saveToLocal();
  }

  public saveToLocal() {
    localStorage.setItem('todo', JSON.stringify(this.todo));
    localStorage.setItem('wip', JSON.stringify(this.wip));
    localStorage.setItem('review', JSON.stringify(this.review));
    localStorage.setItem('accepted', JSON.stringify(this.accepted));
    localStorage.setItem('count', this.count);
    localStorage.setItem('epics', JSON.stringify(this.epics));
    localStorage.setItem('members', JSON.stringify(this.members));
  }

  public loadFromLocal() {
    const loadTodo = localStorage.getItem('todo');
    if (loadTodo != null) {
      this.todo = JSON.parse(loadTodo);
    }
    const loadWip = localStorage.getItem('wip');
    if (loadWip != null) {
      this.wip = JSON.parse(loadWip);
    }
    const loadReview = localStorage.getItem('review');
    if (loadReview != null) {
      this.review = JSON.parse(loadReview);
    }
    const loadAccepted = localStorage.getItem('accepted');
    if (loadAccepted != null) {
      this.accepted = JSON.parse(loadAccepted);
    }
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
