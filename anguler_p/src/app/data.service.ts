import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userName:string ='ppp';
  listData:any;
  studentData: { name: string; age: number; } | undefined;
  setData!: string;

  constructor() { }
  
}
  