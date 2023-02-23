import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user:any
constructor(private router: Router){

}
ngOnInit(): void {
this.user =JSON.parse(localStorage.getItem('userDetails') as any)
console.log(this.user)
}
  LogoutUser(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
