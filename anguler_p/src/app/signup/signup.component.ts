import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { CommonApilCallService } from '../user/common-apil-call.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm!: FormGroup
  //name:string = 'poonam';
  //name!:string;
  student = {
    name: 'poonam',
    age: 30,
    mob:64646464646,
    city:'mumbai',
  }
  data: any;
  studentDataService: any;
  getDataById: any;
  journey!: string;
  postApiData: any;
    



  constructor(private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private commonApicallservice:CommonApilCallService,
    private dataservice:DataService){ }


  ngOnInit() {
    this.getDataById = this.commonApicallservice.getDataById;
      this.journey = this.commonApicallservice.journey;
      console.log( this.getDataById );
      
       this.formDef();
       this.dataService.studentData =  this.student; //set student obj to service property studentData
        this.data = this.dataService.data;
        console.log(" this.data >>", this.data  );


  }

  formDef(){
    this.signUpForm = this.fb.group({
      fullName : [this.getDataById?.fullName ? this.getDataById.fullName : '',[Validators.required, Validators.pattern("[a-zA-Z ]*$"),
                 Validators.minLength(10),this.dataService.whiteSpaceValidator]],
      mobNo:[this.getDataById?.mobNo ? this.getDataById.mobNo : '',[Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      email:[this.getDataById?.email ? this.getDataById.email : ''],
      userName:[this.getDataById?.userName ? this.getDataById.userName : ''],
      city:[this.getDataById?.city ? this.getDataById.city : ''],
      address:[this.getDataById?.address ? this.getDataById.address : ''],
      gender:[this.getDataById?.gender ? this.getDataById.gender : ''],
      password:[this.getDataById?.password ? this.getDataById.password : ''],
      confirmPassword:[this.getDataById?.confirmPassword ? this.getDataById.confirmPassword : '']
    })
  }
  

  submit() {
    
    
    console.log(this.signUpForm.value);
       this.dataService.userName = this.signUpForm.value.fullName;
       console.log(' this.dataService.userFullName>>', this.dataService.userName);
       this.dataService.listOfUsers = ['poonam','pooja','nitin','shri'];
       let endPoint="admin";
       if(this.journey != 'update'){
        this.commonApicallservice.postapicall(endPoint,this.signUpForm.value).subscribe(response=>{
          this.postApiData = response ;
         })
       }
       else{
        this.commonApicallservice.putApiCall(endPoint,this.signUpForm.value,'14').subscribe((res: any)=>{
          console.log(res);
          
        })
       }
       
       this.router.navigateByUrl('landing');
      }
  }







  












