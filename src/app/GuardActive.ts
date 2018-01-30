import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class GuardActiveComponent implements CanActivate {
    constructor (public router: Router) {
        
    }

    canActivate() {
        let user: any;
        user = localStorage.getItem("User");

        if(user != null){
            console.log('can: true')
            return true;
        }else{
            console.log('can: false')
            this.router.navigate(['/pages/login']);
            return false;
        }
    }
}