import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // variables
  public loginform: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private _LoginService: LoginService, private router: Router) { }

  login() {
    console.log(this.loginform);
    this._LoginService.postloginform(this.loginform.value).subscribe(
      (data: any) => {
        alert("Login successfull");
        this.router.navigateByUrl("/dashboard");
        localStorage.setItem("token", data.token);


      },
      (err: any) => {
        alert("Login failed")
      }
    )
  }


}
