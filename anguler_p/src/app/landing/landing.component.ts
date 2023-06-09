import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router :Router){

  }
  landing(){
    this.router.navigateByUrl('/landing')
  }
  
login(): void{
this.router.navigateByUrl('/login') 

}
signup(){
  this.router.navigateByUrl('/signup')
}
signin(){
  this.router.navigateByUrl('/signin')
  
}
userActivity(){
  this. router.navigateByUrl('/user/userActivity')
}
 userdemo(){
  this.router.navigateByUrl('/user/userdemo')
 }





back(){
  this.router.navigateByUrl('/landing')
}

}
