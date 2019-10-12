import { Injectable } from '@angular/core';
import { Member, Epic, Card } from './data';
import { MEMBERS, EPICS, TODOS, WIPS, REVIEWS, ACCEPTEDS } from './demo-data';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  constructor() {}

  getMembers(): Member[] {
    return MEMBERS;
  }
  getEpics(): Epic[] {
    return EPICS;
  }
  getTodos(): Card[] {
    return TODOS;
  }
  getWips(): Card[] {
    return WIPS;
  }
  getReviews(): Card[] {
    return REVIEWS;
  }
  getAccepteds(): Card[] {
    return ACCEPTEDS;
  }
}
