import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../shared/user';

@Component({
  selector: 'app-usrs-list',
  templateUrl: './usrs-list.component.html',
  styleUrls: ['./usrs-list.component.css']
})
export class UsrsListComponent implements OnInit {

  usersList: User[] = [];

  constructor(public userService: UsersService) {
  }

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }

  search(qwery: string): void {
    this.usersList = this.userService.findUsers(qwery);
  }

  sort(sel: string): void {
    this.usersList = this.userService.sortUsers(sel);
  }
}
