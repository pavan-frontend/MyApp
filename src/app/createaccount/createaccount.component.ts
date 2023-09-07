import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountlistService } from '../accountlist.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  public accountform: FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city           : new FormControl()


  });

  constructor(private _accountlistService:AccountlistService){}
  submit(){
    console.log(this.accountform);
    this._accountlistService.createaccount(this.accountform.value).subscribe(
      (data:any)=>{
        alert("account created successfully")
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

}
