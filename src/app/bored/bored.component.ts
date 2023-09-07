import { Component } from '@angular/core';
import { BoredService } from '../bored.service';

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.css']
})
export class BoredComponent {
  public bored:any = [];
  constructor(private _boredService:BoredService){
    _boredService.getbored().subscribe(
      (data:any)=>{
        this.bored = [data];
        // console.log(this.bored)
      },
      (err:any)=>{
        alert("Internal server Error")
      }
    )
  }

  reload(){
    this._boredService.getbored().subscribe(
      (data:any)=>{
        this.bored = [data];
      },
      (err:any)=>{
        alert("Internal server Error")
      }
    )
  }
  
  
}
