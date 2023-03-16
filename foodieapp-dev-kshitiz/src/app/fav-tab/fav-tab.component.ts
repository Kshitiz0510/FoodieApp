import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-fav-tab',
  templateUrl: './fav-tab.component.html',
  styleUrls: ['./fav-tab.component.css']
})
export class FavTabComponent implements OnInit {

  constructor(public userService: UserService) { 
    this.getUserDetails()
  }

  ngOnInit(): void {
  }
  removeFavorite(item:any){
    this.userService.removeFromFavouriteList(item).subscribe(
      response=>{
        alert("done")
        this.getUserDetails()
      }
    )
  }
  addToCart(item:any){
    this.userService.addMenuToCart(item).subscribe(
      response=>{
        alert("done")
      }
    )
  }
  userDetails: any
  getUserDetails() {
    this.userService.getUserDetails().subscribe(
      response => {
        this.userDetails = response
      }
    )
  }
}
