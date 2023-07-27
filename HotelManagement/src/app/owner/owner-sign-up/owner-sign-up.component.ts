import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApicallService } from 'src/app/common/common-apicall.service';
import { CommonService } from 'src/app/common/common.service';


@Component({
  selector: 'app-owner-sign-up',
  templateUrl: './owner-sign-up.component.html',
  styleUrls: ['./owner-sign-up.component.scss']
})
export class OwnerSignUpComponent {
  
  signUpForm!:FormGroup;
  way!:string;
  postResponse:any;
  constructor(private fb:FormBuilder,
    private commonservice:CommonService,
    
    private apiCallService: CommonApicallService,
    private router : Router){}

  ngOnInit(){
  this.way = this.commonservice .way;
  console.log('this.way',this.way);
  
   this.FormDetails();
  }

  FormDetails(){
    this.signUpForm = this.fb.group({
      name:['',[]],
      email:['',[]],
      mobile:['',[]],
      password:['',[]],
      gender:['',[]],
      

    })
  }
  submit(){
    let request = {
      UserName : this.signUpForm.value.name,
      Email:   this.signUpForm.value.email,
      PancardNumber:this.signUpForm.value.PancardNumber,
      Mobile :  this.signUpForm.value.mobile,
      Password :  this.signUpForm.value.password,
      Gender :  this.signUpForm.value.gender
    }

    this.apiCallService.postApiCall(this.way,request).subscribe(resp=>{
      console.log(resp);
      this.postResponse = resp;
    })
    if(this.postResponse?.id){
     this.router.navigateByUrl('owner/ownerSuccess');
    }
  }

  back(){
    this.router.navigateByUrl('owner/ownerhomepage')
  }

}
