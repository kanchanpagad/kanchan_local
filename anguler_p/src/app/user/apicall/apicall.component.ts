import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { CommonApilCallService } from '../common-apil-call.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent {
  [x: string]: any;
  signUpForm!: FormGroup
  postApiResponse: any;
  studentName: any;
  constructor(private fb: FormBuilder, private dataService: DataService, private ApilCallService: CommonApilCallService) { }
  ngOnInit() {
    this.formDef();
  }
  formDef(): void {
    this.signUpForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*$"),
      Validators.minLength(10), this.dataService.whiteSpaceValidator]],
      mobNo: ['', [Validators.pattern("[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      email: [],
      userName: [],
      city: [],
      address: [],
      gender: ['Female']
    })
  }
  submit() {
    console.log(this.signUpForm.value);
    let endpoint ='admin'
    this.ApilCallService.postapicall(endpoint,this.signUpForm.value).subscribe(Response => {
      this.postApiResponse = Response;
    })
  }

  inputBox() {
    console.log(this.studentName);
    let reqdata = {
      "studentName": this.studentName
    }
    let urlendpoint="studentname"
    if (this.studentName > 2) { }
    this.ApilCallService.postapicall(urlendpoint,reqdata).subscribe(resp => {
      console.log(resp);

    })


  }
}
