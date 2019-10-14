import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditCardDialogComponent } from './components/add-edit-card-dialog/add-edit-card-dialog.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import {
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatToolbarModule
} from '@angular/material';

import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MemberDialogComponent } from './components/member-dialog/member-dialog.component';
import { EpicDialogComponent } from './components/epic-dialog/epic-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanBoardComponent,
    AddEditCardDialogComponent,
    ConfirmationDialogComponent,
    MemberDialogComponent,
    EpicDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ScrollingModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddEditCardDialogComponent,
    ConfirmationDialogComponent,
    MemberDialogComponent,
    EpicDialogComponent
  ]
})
export class AppModule {}
