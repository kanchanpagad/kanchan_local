import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharOnly]'
})
export class CharOnlyDirective {

  constructor() { }
  @HostListener('input', ['$event']) 
    
  inputChange(){
  console.log('directive calling...');
  // let initialInputBoxValue = this.elementRef.nativeElement.value;
  // console.log(initialInputBoxValue);
  // this.elementRef.nativeElement.value = initialInputBoxValue.replace(/[^a-zA-Z ]*/g, '')
  

  }
}
