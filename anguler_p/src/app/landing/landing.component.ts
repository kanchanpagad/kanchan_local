import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  uName!:string;
  list!:any;
  constructor(private router :Router, 
    private dataService:DataService ){


  }
  ngOnInit(){
   this.uName = this.dataService.userName;
   this.list=this.dataService.listData
  }
  landing(){
    this.router.navigateByUrl('landing')
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
 directives(){
  this.router.navigateByUrl('directives');
}
lifeCycleHooks(){
  this. router.navigateByUrl('lifecyclehook')
}
parent(){
  this.router.navigateByUrl('parent');
}
child(){
  this.router.navigateByUrl('child');
}




back(){
  this.router.navigateByUrl('/landing')
}

}
