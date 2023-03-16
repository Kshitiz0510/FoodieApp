import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,private _snackBar: MatSnackBar) { }
  message:string="Login Sucessful"
  action:string="success"
  ngOnInit(): void {
  }
  // ,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
  loginForm = new FormGroup({
    'emailId': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required]),
  })

  helper = new JwtHelperService()



  get emailId() {
    return this.loginForm.get('emailId');
  }
  get password() {
    return this.loginForm.get('password')
  }
  errormessage=''
  responseData: any
  sendLoginInfo() {
    // console.log(this.loginForm.value)
    this.userService.loginCheck(this.loginForm.value).subscribe(
      response => {
        this.responseData = response;
        console.log(this.responseData.token);
        console.log(this.responseData.role)
        localStorage.setItem('jwt', this.responseData.token)
        
        const decodedToken = this.helper.decodeToken(localStorage.getItem('jwt'))
        localStorage.setItem('currentEmail', decodedToken.user_email)
        localStorage.setItem('role', decodedToken.user_role)
        this._snackBar.open(this.message,this.action,{duration:5000});
        if (decodedToken.user_role == 'ADMIN') {
          this.router.navigateByUrl('/adminView');
        } else if (decodedToken.user_role == 'RESTAURANT-OWNER') {
          this.router.navigateByUrl('/ownerView')
        } else if (decodedToken.user_role == 'USER') {
          this.router.navigateByUrl('/home-view')
          this.userService.getUserDetails();
        } else {
          this.router.navigateByUrl('/home-view')
        }

      },(error)=>{
        this.errormessage=error
        console.log(error)
      });
  }

  


  // showLoginForm:boolean=true;
}
