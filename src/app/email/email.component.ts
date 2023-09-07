import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  public email:any = [];
  constructor(private _emailService:EmailService){
    _emailService.getemail().subscribe(
      (data:any)=>{
        this.email = data;
      },
      (err:any)=>{
        alert("Internal servor Error")
      }
    )
  }

}
