import { Component } from '@angular/core';

@Component({
  selector: 'app-randomnumber',
  templateUrl: './randomnumber.component.html',
  styleUrls: ['./randomnumber.component.css']
})
export class RandomnumberComponent {

  public num1:number=0;
  randomnumber(){
    this.num1=Math.floor(Math.random()*6)+1;
    return this.num1;
  }
  
  

  
  

}
