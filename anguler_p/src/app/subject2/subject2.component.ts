import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component {
  nameComingFromSub1!:String;

  constructor(private DataService:DataService ){}

  ngOnInit(){
 console.log('int s1');
 
this.DataService.name.subscribe(data=>{

  this.nameComingFromSub1=data;


})
  }

}
