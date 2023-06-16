import { group } from '@angular/animations';
import { Component } from '@angular/core';
import{ FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm!: FormGroup ;
  //name:string='kanchan';
  //name! : string;
  
  
  constructor( private formBuilder : FormBuilder){}
  
  
  
  ngOnInIt(){
    this.singUpFormVControlls();
      
  }

singUpFormVControlls(){
this.signUpForm =this.formBuilder.group({
   name : ['',[Validators.required,Validators.pattern("[a-zA-Z]*$"),Validators.minLength(10)]],
   email : [''],
   contacts : [''],
   address : [''],
   gender : [''],


})
}

}
