import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
public Fproducts:any = [];
constructor(private _flipkartService:FlipkartService){
  _flipkartService.getflipkart().subscribe(
    (data:any)=>{
      this.Fproducts = data;
    },
    (err:any)=>{
      alert("Internal server Error")
    }
  )
}
  

}
