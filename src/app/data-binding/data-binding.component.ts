import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public age:number = 20;
  public name:string = "Abc"
  public isIndian:boolean = true;


  public phone:string = "+91"

  submit(){
    alert("You have submitted");
  }
  cancel(){
    alert("item has cancelled");
  }
  typed(){
    alert("coming after keypress")
  }
  


}
