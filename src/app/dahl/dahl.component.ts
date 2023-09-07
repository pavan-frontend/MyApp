import { Component } from '@angular/core';
import { DahlService } from '../dahl.service';

@Component({
  selector: 'app-dahl',
  templateUrl: './dahl.component.html',
  styleUrls: ['./dahl.component.css']
})
export class DahlComponent {

  public dahl:any = [];


  constructor(private _dahlService: DahlService){
    _dahlService.getdahl().subscribe(
      (data:any)=>{
        this.dahl = [data];
      },
      (err:any)=>{
        alert("Internal server Error")
      }
    )
  }

}
