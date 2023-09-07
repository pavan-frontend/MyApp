import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

  public weight:number =0; 
  public height:number =0;
  public result:number =0;

  bmi(){

    this.result=this.weight/((this.height/100)*(this.height/100))
  }


}
