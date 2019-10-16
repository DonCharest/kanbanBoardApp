# KanbanBoardApp

### Summary

A Kanban Board is tool used to manage projects by visually depicted the work to be completed at each stage throughout the lifecycle of the project.

The Kanban board is divided into four ordered stages of work:

1. `To Do` - new work added to the board.
2. `In Progress` - work that has been started.
3. `In Review` - work that has been completed and is under review.
4. `Accepted` - reviewed work that has met the acceptance criteria.

Each unit of work is defined and represented on the board by a card. The card contians meta-data about the work to be done, including:

- `Title` - summary of the work to be done.
- `Priority` - level of importance of the work (i.e. minor, major, or blocker).
- `Card Type` - story, task, or issue.
- `Assigned to` - the person responsible for completing the work.
- `Epic` - the card me be graphically linked to an Epic.
- `Color` - the cards are white by default but may be changed to varying colors for further visual identification.
- `Comments` - comments may be added to the cards at any time to provide additional details, or status updates.

The Kanban cards are draggable and sortable, and may be placed in any order, in any of the four work stage columns.

### Creating a new card

New Cards are added to the board by selecting the `circular, green plus button`, located at the top of the To Do column.
Once selected, a modal dialog opens; the user then completes the form and selects `save`; the modal closes and a new card is placed into the `To Do column`.

### Editing a new card

Cards may be edited by selecting the `circular, blue edit button`, located inside the card.
Once selected, a modal dialog opens; the user then updates the form fields and selects `save`; the modal closes and the changes are made to the card.

### Deleting a card

Cards may be deleted by selecting the `circular, red times button`, located inside the card.
Once selected, a modal dialog opens and prompts the user for deletion confirmation; if the user selects `yes` the modal closes and the card is removed from the board.

### Adding new Epics to the project

New Epics may be added to the project and subsequently displayed on cards. `Epics are added by selecting the vertical more options button`, located in the toolbar at the top of the page; then `higlighting Epics`, followed by `Add New Epic`. A modal dialog opens and then user completes the form and selects save; the modal then closes, and the new Epic is ready to be used in the project.

### Deleting Epics from the project

`Epics may be deleted` by selecting `view Epics`, then by `selecting the red cross` by the Epic; a modal dialog opens and prompts the user for deletion confirmation, if the user selects `yes` the Epic is removed from the project.

### Adding new Members to the project

New Members are added to the project and are used to satisfy the `assigned to field` on the card. `Members are added by selecting the vertical more options button`, located in the toolbar at the top of the page; then `higlighting Members`, followed by `Add New Member`. A modal dialog opens and then user completes the form and selects save; the modal then closes, and the new Member is ready to be used in the project.

### Deleting Members from the project

`Members may be deleted` by selecting `view Members`, then by selecting the `red cross by the Member`; a modal dialog opens and prompts the user for deletion confirmation, if the user selects `yes` the Member is removed from the project.

## Running the Application

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
