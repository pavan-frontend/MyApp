 import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public ac:number = 0;
  public bc:number = 0;
 

  // @Output() public bEvent:EventEmitter<any> = new EventEmitter();

  // send(){
  //   this.bEvent.emit(this.bc);
  // }

  // @Input() public rate:number = 0;

  @Input() public n1:number = 0;
  @Input() public n2:number = 0;

  @Output() cal:EventEmitter<any>=new EventEmitter();

  sum(){
    this.cal.emit(this.n1+this.n2)
  }
  sub(){
    this.cal.emit(this.n1-this.n2)
  }
  mul(){
    this.cal.emit(this.n1*this.n2)
  }
  div(){
    this.cal.emit(this.n1/this.n2)
  }


}
