import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-register-restaurent-form',
  templateUrl: './register-restaurent-form.component.html',
  styleUrls: ['./register-restaurent-form.component.css']
})
export class RegisterRestaurentFormComponent implements OnInit {

  constructor( private router: Router, private fb: FormBuilder,private adminService:AdminService) { }
  ngOnInit(): void {
    this.emailId.setValue(localStorage.getItem('currentEmail'))
  }

  registerForm = this.fb.group({
    emailId: ['', [Validators.required, Validators.email]],
    restaurantName: ['', Validators.required],
    location: ['', [Validators.required]],
    ratings: ['', [Validators.required]],
    file: ['', [Validators.required]],
  });
  get emailId() { return this.registerForm.get("emailId") }
  get restaurantName() { return this.registerForm.get("restaurantName") }
  get location() { return this.registerForm.get("location"); }
  get ratings() { return this.registerForm.get("ratings"); }
  get file() { return this.registerForm.get("file"); }
  sendRegisterData() {
    
    this.adminService.addNewRestaurent(this.registerForm.value,this.selectedFile).subscribe(
      response=>{
        this.router.navigateByUrl('/home-view')
      }
    )

  }
  selectedFile: File=null;
  onFileChanged(event:any) {
    console.log(event)
    this.selectedFile = <File>event.target.files[0]
  }

}
