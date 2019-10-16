# KanbanBoardApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3.

A Kanban Board is tool used to manage projects by visually depicted the work to be completed at each stage throughout the lifecycle of the project.

This Kanban board is divided into four ordered stages of work:

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
- `Color` - the cards are white by default, but may be changed to varying colors for further visual identification.
- `Comments` - comments may be added to the cards at any time to provide additional details, or status updates.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
