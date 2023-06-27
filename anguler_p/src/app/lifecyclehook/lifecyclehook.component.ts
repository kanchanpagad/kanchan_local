import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.css']
})
export class LifecyclehookComponent {

 @Input() test :any

constructor(){
  console.log('constructor....');
}

ngOnChange(){
  console.log('ngOnChange...');
}
ngOnInit(){
   console.log('ngInit....');
   
}
ngDoCheck(){
  console.log('ngDoCheck');
  
}
}
