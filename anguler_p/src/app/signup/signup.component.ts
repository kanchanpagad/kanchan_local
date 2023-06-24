import { Component } from '@angular/core';
import{ FormGroup,FormBuilder,Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm! :FormGroup
  //name:string = 'poonam';
  //name!:string;
  student = {
   name: 'poonam',
   age:30
  }

  constructor(private fb: FormBuilder , 
              private dataService : DataService , 
              private router : Router){}

   ngOnInit(){
    this.formDef()
      

      
   }

    formDef(): void{
       this.signUpForm = this.fb.group({
         fullName : ['',[Validators.required, Validators.pattern("[a-zA-Z ]*$"),Validators.minLength(10)]],
         mobNo:['',[Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
         email:[],
         userName:[],
         city:[],
         address:[],
         gender:['Female']
       })
       }

     submit(){
       console.log(this.signUpForm.value);
       this.dataService.userName = this.signUpForm.value.fullName;
      
       this.router.navigateByUrl('landing');


      
    
    


      
     }









}

  

