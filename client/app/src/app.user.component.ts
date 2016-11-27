import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import { User } from './app.models';

@Component({
    moduleId: module.id,
    selector : 'user-detail',
    templateUrl : '/client/views/user.detail.html'
})


export class UserDetailComponent implements OnInit  {

user;
constructor(private userService: UserService,
            private route: ActivatedRoute,
            private location: Location
           ) {}
    
ngOnInit(): void {
    this.route.params
     .switchMap((params :Params) => this.userService.getUser(+params["id"]))
     .subscribe(user => this.user = user);
    }

goBack(): void {
  this.location.back();
}

}