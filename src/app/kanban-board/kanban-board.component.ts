import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

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
  todo: any[];
  wip: any[];
  review: any[];
  accepted: any[];

  title: string;
  priority: string;
  assignedTo: string;
  type: string;
  color: string;
  comments: string;

  id: string;
  count: any;

  constructor(public dialog: MatDialog) {
    // Set counter from LS - if available
    this.count = localStorage.getItem('count');
    // Otherwise start at 1
    if (this.count === null) {
      this.count = 1;
    }

    this.todo = [];
    this.wip = [];
    this.review = [];
    this.accepted = [];
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
    comments: string
  ): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
      data: {
        title,
        priority,
        assignedTo,
        type,
        index,
        id,
        color,
        comments
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
        comments: data.comments
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
    const dialog = this.dialog.open(ModalComponent, {
      width: '450px',
      data: {}
    });

    dialog.afterClosed().subscribe(data => {
      this.todo.push({
        id: 'PROJ-0000' + this.count,
        title: data.title,
        priority: data.priority,
        assignedTo: data.assignedTo,
        type: data.type,
        color: data.color,
        comments: data.comments
      });

      this.count++;
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
        } else {
          this.removeAccepted(i);
        }
        const a = document.createElement('a');
        a.click();
        a.remove();
      }
    });
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
  }

  public loadFromLocal() {
    const loadTodo = localStorage.getItem('todo');
    this.todo = JSON.parse(loadTodo);

    const loadWip = localStorage.getItem('wip');
    this.wip = JSON.parse(loadWip);

    const loadReview = localStorage.getItem('review');
    this.review = JSON.parse(loadReview);

    const loadAccepted = localStorage.getItem('accepted');
    this.accepted = JSON.parse(loadAccepted);
  }

  ngOnInit() {
    this.loadFromLocal();
  }
}
