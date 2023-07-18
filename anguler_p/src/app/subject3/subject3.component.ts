import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subject3',
  templateUrl: './subject3.component.html',
  styleUrls: ['./subject3.component.css']
})
export class Subject3Component {
  dataFromSub1!: string;

  constructor(private DataService: DataService ){}

ngOnInit(){
  this.DataService.name.subscribe(data=>
    {
this.dataFromSub1=data;


    })
}
}
