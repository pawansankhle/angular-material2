import { Component } from '@angular/core';
import { User } from './app.models';
import { UserService } from './user.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app',
  templateUrl: '/client/views/home.html',
  
})
export class AppComponent implements OnInit{ 

  constructor(private userService: UserService){}
  
  users : User[];
  selectedUser: User;
  
  ngOnInit() : void {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
    
  }

  selectUser(user : User): void {
    this.selectedUser = user;
 }
  
  
    
}
