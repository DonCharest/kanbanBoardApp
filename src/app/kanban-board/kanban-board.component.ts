import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

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
  // points: number;
  priority: string;
  assignedTo: string;
  type: string;
  id: string;
  color: string;
  count: number;

  // items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  constructor(public dialog: MatDialog) {
    this.count = 1;

    this.todo = [
      {
        id: 'TEST-10001',
        title: 'As a <type of user>, I want <some goal> so that <some reason>.',
        priority: 'minor',
        assignedTo: 'Jen Hayes',
        type: 'story',
        color: 'default'
      },
      {
        id: 'TEST-10002',
        title:
          'As a power user, I can specify files or folders to backup based on file size, date created and date modified.',
        priority: 'blocker',
        assignedTo: 'Joe Johnson',
        type: 'issue',
        color: 'default'
      },
      {
        id: 'TEST-10003',
        title:
          'As a user, I can indicate folders not to backup so that my backup drive isn\'t filled up with things I don\'t need saved.',
        priority: 'major',
        assignedTo: 'Steve Price',
        type: 'story',
        color: 'default'
      },
      {
        id: 'TEST-10004',
        title:
          'As an Acquisition Gateway User, I need to select an Auction product in the Acquisition ordering platform so that I can bid on it.',
        priority: 'major',
        assignedTo: 'Jeff Goldman',
        type: 'task',
        color: 'default'
      }
    ];

    this.wip = [];

    this.review = [
      {
        id: 'TEST-10005',
        title:
          'As a Content Owner, I want to be able to create product content so that I can provide information and market to customers.',
        priority: 'minor',
        assignedTo: 'Gary Goulet',
        type: 'story',
        color: 'default'
      },
      {
        id: 'TEST-10006',
        title: 'Brush teeth',
        priority: 'major',
        assignedTo: 'you',
        type: 'task',
        color: 'default'
      },
      {
        id: 'TEST-10007',
        title: 'Take a shower',
        priority: 'major',
        assignedTo: 'you',
        type: 'story',
        color: 'default'
      },
      {
        id: 'TEST-10008',
        title: 'Check e-mail',
        priority: 'blocker',
        assignedTo: 'me',
        type: 'issue',
        color: 'default'
      },
      {
        id: 'TEST-10009',
        title: 'Walk dog',
        priority: 'minor',
        assignedTo: 'her',
        type: 'story',
        color: 'default'
      }
    ];

    this.accepted = [];
  }

  /* Modal to edit cards */
  public openDialogEdit(
    title: string,
    priority: string,
    assignedTo: string,
    type: string,
    index: number,
    id: string,
    color: string
  ): void {
    const dialogRefEdit = this.dialog.open(ModalEditComponent, {
      width: '350px',
      data: {
        title,
        priority,
        assignedTo,
        type,
        index,
        id,
        color
      }
    });
    console.log('id: ' + id);
    dialogRefEdit.afterClosed().subscribe(data => {
      const obj = {
        id: data.id,
        title: data.title,
        priority: data.priority,
        assignedTo: data.assignedTo,
        type: data.type,
        color: data.color
      };

      if (this.todo.some(data => data.id === id)) {
        this.todo.splice(index, 1, obj);
      } else if (this.wip.some(data => data.id === id)) {
        this.wip.splice(index, 1, obj);
      } else if (this.review.some(data => data.id === id)) {
        this.review.splice(index, 1, obj);
      } else if (this.accepted.some(data => data.id === id)) {
        this.accepted.splice(index, 1, obj);
      }
    });
  }

  /* Modal to create new cards */
  public openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
      // console.log('going to push now!');
      this.todo.push({
        id: 'PROJ-0000' + this.count,
        title: data.title,
        priority: data.priority,
        assignedTo: data.assignedTo,
        type: data.type,
        color: data.color
      });
      this.count++;
    });
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
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  // methods to remove cards
  public removeToDo(index: number) {
    this.todo.splice(index, 1);
  }
  public removeWiP(index: number) {
    this.wip.splice(index, 1);
  }
  public removeReview(index: number) {
    this.review.splice(index, 1);
  }
  public removeAccepted(index: number) {
    this.accepted.splice(index, 1);
  }

  ngOnInit() {}
}
