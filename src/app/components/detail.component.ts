import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/User.service';
import { User } from 'app/Models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'selector-name',
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {
    userModel: User;
    constructor(private userService: UserService, private router: Router) { 
       this.userModel = this.userService.SelectedUser;
    }

    ngOnInit() { }

    UpdateUser(){
        this.userService.Update(this.userModel).subscribe(result => 
            console.log(result)
        );
        this.router.navigate(['/components/tables']);
    }
}