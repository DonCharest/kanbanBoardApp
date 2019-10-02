import {
  // ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class KanbanBoardComponent implements OnInit {
  todo: any[];
  wip: any[];
  done: any[];
  accepted: any[];
  title: string;
  points: number;
  assignedTo: string;
  type: string;

  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  constructor(public dialog: MatDialog) {
    this.todo = [
      { title: 'Get to work', points: 1, assignedTo: 'me', type: 'story' },
      {
        title: 'Pick up groceries',
        points: 5,
        assignedTo: 'you',
        type: 'issue'
      },
      { title: 'Go home', points: 3, assignedTo: 'him', type: 'story' },
      { title: 'Fall asleep', points: 2, assignedTo: 'her', type: 'task' }
    ];

    this.wip = [];

    this.done = [
      { title: 'Get up', points: 1, assignedTo: 'me', type: 'story' },
      { title: 'Brush teeth', points: 1, assignedTo: 'you', type: 'task' },
      { title: 'Take a shower', points: 1, assignedTo: 'you', type: 'story' },
      { title: 'Check e-mail', points: 1, assignedTo: 'me', type: 'issue' },
      { title: 'Walk dog', points: 1, assignedTo: 'her', type: 'story' }
    ];

    this.accepted = [];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {
        title: this.title,
        points: this.points,
        assignedTo: this.assignedTo,
        type: this.type
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      // console.log('going to push now!');
      this.todo.push({
        title: data.title,
        points: data.points,
        assignedTo: data.assignedTo,
        type: data.type
      });
    });
  }

  // function to calculate and update the index of the card after being moved in current array,
  // or droped into a new array
  drop(event: CdkDragDrop<string[]>) {
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
  public removeDone(index: number) {
    this.done.splice(index, 1);
  }
  public removeAccepted(index: number) {
    this.accepted.splice(index, 1);
  }

  ngOnInit() {}
}
