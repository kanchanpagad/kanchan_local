import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApicallService {
  url = 'http://localhost:3000/';
  getDataById: any;
  journey!: string;
  constructor (private http: HttpClient) { }
  
  postApiCall(endPoint: string, formData: any) {
    let url = this.url + endPoint;
    return this.http.post(url, formData);
  }

  getApiCall(endPoint:string){
    let url = this.url + endPoint;
    return this.http.get(url);
  }
  
}
