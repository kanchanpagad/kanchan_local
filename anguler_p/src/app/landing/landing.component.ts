import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CommonApilCallService } from '../user/common-apil-call.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  uName!:string;
  list!:any;
  getApiResponse!:any ;
  dataS: { name: string; age: number; } | undefined;
  studentsData:any;
  
  constructor(private router :Router, 
    private dataService:DataService , private commonapicallservice :CommonApilCallService){


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
show(){
  this.dataS = this.dataService.studentData; 
  console.log(this.dataService);
  //JSON.stringify()
  let strigiFyedData = JSON.stringify(this.dataService);
  console.log('stringifyedData',strigiFyedData);

 //JSON.parse()
 let parsedData = JSON.parse(strigiFyedData );
 console.log('parsedData>>',parsedData);
  
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

form(){
  this.router.navigateByUrl('/form')
}




apicall(){
  this.router.navigateByUrl('user/apicall')
}
getCall(){
  console.log('get api calling');
  let endpoint = 'admin';
this.commonapicallservice.getApiCall(endpoint).subscribe(response =>{
this.getApiResponse = response;
  })
   console.log(" this.getApiResponse", this.getApiResponse);
  }
  delete(){
    this.commonapicallservice.deletApiCall('admin',2).subscribe((resp: any)=>{
     console.log('delet respo', resp);
     
    })
 }
 subject(){
  this.router.navigateByUrl('subject1')
 }

}

