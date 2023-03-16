
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor(private router: Router, public userService: UserService,private _snackBar: MatSnackBar) {
    
   
  }

  ngOnInit(): void {
    if(this.userService.isloggedIn()){
      this.getUserDetails()
      this.role=localStorage.getItem("role")
    }
  }

  role:any
  logout() {
    localStorage.clear();
    this._snackBar.open("Logged Out","Successfully",{duration:5000});
    this.router.navigateByUrl('home-view')
  }

  displaylogout: boolean = false
  
  getUserDetails() {
    this.userService.getUserDetails().subscribe(
      response => {
        this.userDetails = response
      }
    )
  }
  userDetails: any
}
