import { Member, Epic, Card } from './data';

export const MEMBERS: Member[] = [
  { name: 'Don Charest' },
  { name: 'Steve Price' },
  { name: 'Mark Pugliese' },
  { name: 'Tim Cox' }
];

export const EPICS: Epic[] = [
  { title: 'Design Board Layout' },
  { title: 'Implement Board Layout' },
  { title: 'Design Data Model' },
  { title: 'Develop UI' },
  { title: 'Implement Drag & Drop' },
  { title: 'Develop Provider-Service' }
];

export const TODOS: Card[] = [
  {
    title: 'Design card and column structure',
    priority: 'major',
    assignedTo: 'Don Charest',
    type: 'story',
    color: 'default',
    comments: 'Work completed',
    epicLink: 'Design Board Layout',
    id: 'DEMO-000001'
  },
  {
    title: 'Create Model files',
    priority: 'major',
    assignedTo: 'Don Charest',
    type: 'story',
    color: 'default',
    comments: 'Work completed',
    epicLink: 'Design Data Model',
    id: 'DEMO-000001'
  }
];

export const WIPS: Card[] = [
  {
    title: 'Design card and column structure',
    priority: 'major',
    assignedTo: 'Don Charest',
    type: 'story',
    color: 'default',
    comments: 'Work completed',
    epicLink: 'Design Board Layout',
    id: 'DEMO-000001'
  },
  {
    title: 'Create Model files',
    priority: 'major',
    assignedTo: 'Don Charest',
    type: 'story',
    color: 'default',
    comments: 'Work completed',
    epicLink: 'Design Data Model',
    id: 'DEMO-000002'
  }
];

export const REVIEWS: Card[] = [
  {
    title: 'Design card and column structure',
    priority: 'major',
    assignedTo: 'Don Charest',
    type: 'issue',
    color: 'pink',
    comments: 'Work completed',
    epicLink: 'Design Board Layout',
    id: 'DEMO-000003'
  },
  {
    title: 'Create Model files',
    priority: 'major',
    assignedTo: 'Don Charest',
    type: 'story',
    color: 'green',
    comments: 'Work completed',
    epicLink: 'Design Data Model',
    id: 'DEMO-000004'
  }
];

export const ACCEPTEDS: Card[] = [
  {
    title: 'Design card and column structure',
    priority: 'major',
    assignedTo: 'Don Charest',
    type: 'story',
    color: 'default',
    comments: 'Work completed',
    epicLink: 'Design Board Layout',
    id: 'DEMO-000005'
  },
  {
    title: 'Create Model files',
    priority: 'major',
    assignedTo: 'Don Charest',
    type: 'story',
    color: 'default',
    comments: 'Work completed',
    epicLink: 'Design Data Model',
    id: 'DEMO-000006'
  }
];
