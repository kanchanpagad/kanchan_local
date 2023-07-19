import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonApilCallService } from '../user/common-apil-call.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form! : FormGroup;
  adminData:any;
  tableHeading : any[]= ['Full Name', "Mobile Number", "City", "Email"];
  inp: any;
  myName = 'kanchan';
   todayDate = new Date();
   searchBoxVal:any;
  inputValue:any
  matForm !: any;
  
  showPassword : boolean = false;
  showConfirmPassword: boolean = false;
  constructor (private fb : FormBuilder, 
   private commonApiCallService: CommonApilCallService,
   private httpClient : HttpClient){}

  ngOnInit(){
   console.log('...');
   this.myForm();
   this.getData();
   this.matFormDetails();
  }

   myForm(){
     this.form = this.fb.group({
     name : ['',[]],
     mobileNo : ['']
   })
   }

   save(){
     console.log(" this.form", this.form.value);
     let urlEndPoint = 'form';
     let formData = {
       Name : this.form.value.name,
       MobileNumber : this.form.value.mobileNo
     }
    this.commonApiCallService.postapicall(urlEndPoint,formData).subscribe(resp=>{
     console.log(resp);
    })
   }

   getData(){
     let endpointToGetData = 'admin';
     this.commonApiCallService.getApiCall(endpointToGetData).subscribe(data =>{
     console.log('get data',data);
     this.adminData = data;
   });
   
    
   }

   inptVal(val:any){
    console.log('val',val.target.value);
    console.log('inputValue',this.inptVal);
    
    this.inp = val.target.value
  }
  searchBoxValue(){
    this.searchBoxValue = this.inp;
  }
  matFormDetails(){
    this.matForm = this.fb.group({
      firstName : ['',[Validators.required, Validators.pattern('[a-zA-Z]*$'),Validators.minLength(2)]],
      middleName : ['',[Validators.required]],
      lastName : ['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
    })
  }
  // visibilePassword(){
  //   this.showPassword =  !this.showPassword;
    
   
    
  // }
  // visibileConfirmPassword(){
  //   //this.confirmPasswordField = this.matForm.value.confirmPassword;
  //   this.showConfirmPassword = !this.showConfirmPassword;
  //  // this.passwordField == this.confirmPasswordField ? this.ConfirmPasswordMatch=true : this.ConfirmPasswordMatch = false;
  // }


}
