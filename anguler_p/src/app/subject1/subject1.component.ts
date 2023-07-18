import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.css']
})
export class Subject1Component {
name='Rohini';
  constructor(private DataService: DataService ){}
sendData (){

 this. DataService.name.next(this.name);

}

}
