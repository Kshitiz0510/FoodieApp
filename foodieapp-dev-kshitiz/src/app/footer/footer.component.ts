import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, public userService: UserService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.clear();
    this._snackBar.open("Logged Out","Successfully",{duration:5000});
    this.router.navigateByUrl('home-view')
  }
}
