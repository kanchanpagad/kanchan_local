import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(
    private router:Router, 
    private CommonService:CommonService
  ){}
  


  way(way:string){
    if(way === 'admin'){
       this.CommonService.way = 'admin'
       this.router.navigateByUrl('admin');
    }
    else if(way === 'owner'){
     this.CommonService.way = 'owner'
     this.router.navigateByUrl('owner');
    }
    else{
     this.CommonService.way = 'user'
     this.router.navigateByUrl('user');
    }


}
}
