import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { AdminService } from '../service/admin.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-restaurent-details',
  templateUrl: './restaurent-details.component.html',
  styleUrls: ['./restaurent-details.component.css']
})
export class RestaurentDetailsComponent implements OnInit {

  constructor(private userService:UserService,private adminService:AdminService,private activatedRoute: ActivatedRoute,private router:Router,private _snackBar: MatSnackBar) { 
    this.activatedRoute.paramMap.subscribe((data)=>{
      let id=data.get('restaurantId');
      this.adminService.getResturantById(id).subscribe((x)=>this.resturantDetails=x);
      // console.log(this.resturantDetails);
      this.menuItem=this.resturantDetails.menuList;
      // console.log(this.menuItem);
    })
  }
  resturantDetails:any;
  menuItem:any;
  selectedValue='';
  value ='';
  filterType='';
  foods: any[] = [
    {value: 'itemName', viewValue: 'Item Name'},
    {value: 'cuisine', viewValue: 'Cuisine'},
    {value: 'rating', viewValue: 'Rating'},
  ];
  ngOnInit(): void {
   
  }
  
  UserFavorite(item:any){

    if(this.userService.isloggedIn()){
      this.userService.UserFavouriteList(item).subscribe(
        response=>{
          console.log(response);
          this.openSnackBar("Added To Favourite")
        }
      )
    }else{
      this.router.navigateByUrl("/login-view")
    }
    
  }
  addToCart(item:any){
    if(this.userService.isloggedIn()){
    this.userService.addMenuToCart(item).subscribe(
      response=>{
        this.openSnackBar("Added To Cart")
        console.log("done")
      }
    )
    }else{
      this.router.navigateByUrl("/login-view")
    }
  }
  openSnackBar(msg:string) {
    this._snackBar.open(msg, 'OK', {
      duration:3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
