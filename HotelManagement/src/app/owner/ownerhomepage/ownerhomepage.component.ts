import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApicallService } from 'src/app/common/common-apicall.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownerhomepage',
  templateUrl: './ownerhomepage.component.html',
  styleUrls: ['./ownerhomepage.component.scss']
})
export class OwnerhomepageComponent {

  loginForm!:FormGroup;
  endPoint!:string;
  ownerData : any;
  validUser: boolean = false;
  
  constructor(private router: Router,
    private fb: FormBuilder,
    private commonApiCallService: CommonApicallService,
    private commonService: CommonService) {

  }
 
  ngOnInit(){
    this.endPoint = this.commonService.way;
    console.log('endPoint...',this.endPoint);
    this.loginFormDetails();
  }

  loginFormDetails(){
    this.loginForm = this.fb.group({
      userName:[],
      password:[]
    })
  }


  login() {
    console.log(this.loginForm.value);
    this.getOwnerApiData();
    console.log('this.ownerData', this.ownerData);

    if (this.ownerData) {
       this.isValidUser();
      if (this.validUser) {
  
  this.router.navigateByUrl('owner/ ownerSuccess');
      }
      else {
        this.router.navigateByUrl('owner/ownerhomepage');
      }
    }
  }
  back(){
    this.router.navigateByUrl('homepage')
  }

  getOwnerApiData(){
    this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponse=>{
      this.ownerData = getOwnerResponse;
    })
    console.log('this.ownerData',this.ownerData);
    
  }

  isValidUser(){
    this.ownerData.forEach((element:any)=>{
      if(element.UserName === this.loginForm.value.userName && element.Password === this.loginForm.value.password) {
        this.validUser = true;
      }     
    });
    return
  }
}

