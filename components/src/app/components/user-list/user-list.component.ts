import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[];
  constructor(private userService: UserListService) { }

  ngOnInit() {
    this.getUsers();
  }


  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.userList = users);
  }

  getCount(user: User): boolean {
    return user.taskList.every(task => task.isDone);
  }

}
