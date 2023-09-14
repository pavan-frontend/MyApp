import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public Mr:any = [];
  public users: any = [];

  public term: any = [];

  public column: any = [];
  public order: any = [];

  constructor(private _usersService: UsersService) {
    _usersService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      (err: any) => {
        alert("Internal server Error")
      }

    )
  }
  //  Filtered method
  getfilteredusers() {
    this._usersService.getfilteredusers(this.term).subscribe(
      (data: any) => {
        this.users = data;
      },
      (err: any) => {
        alert("Internal server Error")
      }
    )
  }

  // Sorted method

  getSortedUsers(){
    this._usersService.getSortedUsers(this.column,this.order).subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }

    )
    console.log(this.getSortedUsers);
  }

}
