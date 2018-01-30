import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { NgClass } from '@angular/common';
import { User } from 'app/Models/User';
import { UserService } from 'app/services/User.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  userModel:User = { Firstname:"", Lastname:"", Email:"", Password:"", Phonenumber:''};
  constructor(private userService: UserService, private router: Router) { }

  submitForm(form:any): void{
     console.log(form);
     this.userService.Insert(this.userModel).subscribe(result => {
       console.log(result);
       this.router.navigate(['/pages/login']);
    }, (err) => console.log(err));
  }
}
