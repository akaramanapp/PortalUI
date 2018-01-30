import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  user: any;
  constructor(private router: Router){
    this.user = localStorage.getItem("User");
  }

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
    
  }

  ngOnInit(): void {}

  logout(){
    localStorage.removeItem("User");
    localStorage.removeItem("Token");
    this.router.navigate(['/pages/login']);
  }
}
