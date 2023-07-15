import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userName:string ='ppp';
  listData:any;
  studentData:any;
  setData!: string;
  listOfUsers:any;
  data: any;

  whiteSpaceValidator(name:any){
    let data = name.value;
    let newdata = data?.trim();
    let isValid = data.length != newdata.length ;
    return isValid ? {whiteSpace:true} : null
  }

  constructor() { }
  
}
  