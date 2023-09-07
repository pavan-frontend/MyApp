import { Component } from '@angular/core';
import { AccountlistService } from '../accountlist.service';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent {
  public accountlist:any = [];

  public term:string = "";

  public column:string = "";
  public order:string = "";

  public limit:any = [];
  public page:any = [];

  constructor(private _accountlistService:AccountlistService){
    _accountlistService.getaccountlist().subscribe(
      (data:any)=>{
        this.accountlist = data;
      },
      (err:any)=>{
        alert("Internal server Error")
      }
    )

  }

  getfilteredaccountlist(){
    this._accountlistService.getfilteredaccountlist(this.term).subscribe(
      (data:any) =>{
        this.accountlist = data;
      },
      (err:any)=>{
        alert("Internal server erroer")
      }
    )
  }

  getSortedaccountlist(){
    this._accountlistService.getSortedaccountlist(this.column,this.order).subscribe(
      (data:any)=>{
        this.accountlist = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  // pagination function
  getPageAccountlist(){
    this._accountlistService.getPageAccountlist(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accountlist = data;
      },
      (err:any)=>{
        alert("Internal server Error")
      }
    )
  }


  deleteaccountlist(id:any){

    this._accountlistService.deleteaccountlist(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully")
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )

  }
  


}
