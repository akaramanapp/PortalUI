import { Component } from '@angular/core';
import { AuthenticationService } from 'app/services/Authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  model: any = {};
  error: any;
  constructor(private Auth: AuthenticationService, private router: Router) { }

  login(){
    this.Auth.login(this.model.username, this.model.password).subscribe(result => {
      if(result == true){
        console.log('Giriş başarılı');
        this.router.navigate(['/']);
        
      }else{
        console.log('Hatalı giriş');
        
      }
    }, (err) => this.error = "Kullanıcı adı veya şifre yanlış");
  }
}
