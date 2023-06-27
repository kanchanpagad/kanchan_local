import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData:any;
  name:any;
  valueFromChild:any;
  parentName = 'poonam';
  surName:any;
  constructor(public dataService :DataService){

  }

  set(){
  this.dataService.setData = "poonam";
  }
  getData(value : any){
    console.log(value);
    this.valueFromChild = value;
    
  }
}   
