import { HttpClient } from '@angular/common/http';
//mport { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  
})
export class CommonApilCallService {
  //adminurl="http://localhost:3000/profile"
//StudentNameurl="http://localhost:3000/studentName"
url= "http://localhost:3000/"
  constructor( private hTTPClient: HttpClient) { }
//   postapicall(formData:any){
//     return this.hTTPClient.post(this.adminurl,formData)
    
//   }

// postApiforStudentName(data:any){
//  return this.hTTPClient.post(this.StudentNameurl,data)

// }}
  postapicall(endpoint:string,Data:any){
    let apiurl= this.url+endpoint
    return this.hTTPClient.post(apiurl,Data)
      }}
      