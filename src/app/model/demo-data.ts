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
  { title: 'Develop User Interface' },
  { title: 'Implement Drag & Drop' },
  { title: 'Develop Provider-Service' }
];

export const TODOS: Card[] = [
  {
    title: 'Design card and column structure',
    priority: 'blocker',
    assignedTo: 'Don Charest',
    type: 'story',
    color: 'default',
    comments: 'Work completed',
    epicLink: 'Design Board Layout',
    id: 'DEMO-000001'
  },
  {
    title: 'Create Model files',
    priority: 'minor',
    assignedTo: 'Mark Pugliese',
    type: 'story',
    color: 'default',
    comments: 'Work completed',
    epicLink: 'Design Data Model',
    id: 'DEMO-000002'
  }
];

export const WIPS: Card[] = [
  {
    title: 'Develop Controller for Drag-and-Drop',
    priority: 'major',
    assignedTo: 'Don Charest',
    type: 'story',
    color: 'default',
    comments: 'Work completed',
    epicLink: 'Implement Drag & Drop',
    id: 'DEMO-000003'
  },
  {
    title: 'Develop Controller for Provider Service',
    priority: 'major',
    assignedTo: 'Don Charest',
    type: 'story',
    color: 'default',
    comments: 'Work completed',
    epicLink: 'Develop Provider-Service',
    id: 'DEMO-000004'
  }
];

export const REVIEWS: Card[] = [
  {
    title: 'Fix Bug with card priority display',
    priority: 'major',
    assignedTo: 'Steve Price',
    type: 'issue',
    color: 'default',
    comments: 'Work completed',
    epicLink: null,
    id: 'DEMO-000005'
  },
  {
    title: 'Create consistent component theme',
    priority: 'minor',
    assignedTo: 'Tim Cox',
    type: 'story',
    color: 'default',
    comments: 'Work completed',
    epicLink: 'Develop User Interface',
    id: 'DEMO-000006'
  }
];

export const ACCEPTEDS: Card[] = [
  {
    title: 'complete Drag-and-Drop Animation',
    priority: 'major',
    assignedTo: 'Don Charest',
    type: 'story',
    color: 'default',
    comments: 'Work completed',
    epicLink: null,
    id: 'DEMO-000007'
  },
  {
    title: 'Create Mock Data files',
    priority: 'minor',
    assignedTo: 'Mark Pugliese',
    type: 'task',
    color: 'default',
    comments: 'Work completed',
    epicLink: 'Design Data Model',
    id: 'DEMO-000008'
  }
];
