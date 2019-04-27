import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../user';
import { USER_LIST } from '../mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  getUsers(): Observable<User[]> {
    return of(USER_LIST);
  }
  constructor() { }
}
