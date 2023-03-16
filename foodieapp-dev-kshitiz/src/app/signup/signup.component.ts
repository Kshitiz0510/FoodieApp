import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errormessage="";
  constructor(private userService: UserService, private router: Router, private _snackBar: MatSnackBar, private fb: FormBuilder) { }
  hide = true;
  message:string="SignUp Sucessfull"
  action:string="success"
  ngOnInit(): void {
  }
  signupForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    emailId: ['', [Validators.required, Validators.email]],
    mobileNo: ['', [Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]],
    address: ['', [Validators.required]],
    file: ['', [Validators.required]],

  }, { validators: [this.mustMatchValidator] });

  get userName() { return this.signupForm.get("userName") }

  get emailId() { return this.signupForm.get("emailId") }

  get mobileNo() { return this.signupForm.get("mobileNo"); }

  get password() { return this.signupForm.get("password"); }

  get confirmPassword() { return this.signupForm.get("confirmPassword"); }

  get address() { return this.signupForm.get("address"); }
  get file() { return this.signupForm.get("file"); }

  sendSignupData() {
    console.log(this.signupForm.value);
    this.userService.registerUser(this.signupForm.value,this.selectedFile).subscribe(
      response=>{
        console.log(response)
        this._snackBar.open(this.message,this.action,{duration:5000});
        this.router.navigateByUrl("/home-view")
      },(error)=>{
        this.errormessage=error
        console.log(error)
      });

  }

  mustMatchValidator(fg: AbstractControl) {
    const passwordValue = fg.get("password")?.value;
    const confirmPasswordValue = fg.get("confirmPassword")?.value;
    console.log(passwordValue);

    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
      return { mustMatch: false }
    }
    return null;
  }

  selectedFile: File=null;
  onFileChanged(event:any) {
    console.log(event)
    this.selectedFile = <File>event.target.files[0]
  }
}
