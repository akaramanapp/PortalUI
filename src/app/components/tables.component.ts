import { Component } from '@angular/core';
import { UserService } from 'app/services/User.service';
import { User } from 'app/Models/User';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'tables.component.html'
})
export class TablesComponent {
  userList: any;
  constructor(private userService: UserService, private router: Router) { 
      this.getAllUser();
  }

  getAllUser(){
         this.userService.GetAllUsers().subscribe(result => this.userList = result);
  }

  userEdit(user: User){
      this.userService.SelectedUser = user;
      this.router.navigate(['components/detail']);
  }
}
