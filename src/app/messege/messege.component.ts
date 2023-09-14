import { Component } from '@angular/core';
import { MessegeService } from '../messege.service';

@Component({
  selector: 'app-messege',
  templateUrl: './messege.component.html',
  styleUrls: ['./messege.component.css']
})
export class MessegeComponent {
  public user:any[] = [];
  public searchTerm:string = '';

  constructor(private _messegeService:MessegeService){
    _messegeService.getmesseges().subscribe(
      (data:any)=>{
        this.user = data.results;
      },
      (err:any)=>{
        alert("No user Found");
      }
    )
  }

  getfilteredUsers() {
   this.user = this.user.filter((value:any)=> value.name.first.includes(this.searchTerm))
  }
}

