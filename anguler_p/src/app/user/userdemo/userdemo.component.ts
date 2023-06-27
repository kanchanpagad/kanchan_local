import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-userdemo',
  templateUrl: './userdemo.component.html',
  styleUrls: ['./userdemo.component.css']
})
export class UserdemoComponent {
  studentData = {
    name:'pooja',
    age:20,
    class:'firstYear'
  }
  DataService: any;
  constructor(private router : Router,
    private studentDataService : DataService ){

  }

  back(){
     this.router.navigateByUrl('landing')
  }

  setData(){
       this.DataService.studentData = this.studentData;
       console.log("service's property >>",this.DataService.studentData);
       
  }
  serviceFun(){
   let res = this.DataService.test(20,30);
    console.log('res',res);
    
  }
  keyUpEvent(event:any){
    console.log(event);
    
  }
  blur(){
    console.log('blur');
    
  }
  focus(){
    console.log('focus');
    
  }
}


