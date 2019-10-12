import { Injectable } from '@angular/core';
import { Member, Epic } from './data';
import { MEMBERS, EPICS } from './mock-data';

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
}
