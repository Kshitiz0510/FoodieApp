import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../service/user.service';

export interface Menu {
itemName:string;
itemPrice:number;
cuisine:string;
rating:number;
itemImage:string;
quantity:number
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(public userService: UserService,private _snackBar: MatSnackBar) {
    this.getUserDetails()
    this.total()
  }
  
  userDetails:any
  dataSource:Menu
  ngOnInit(): void {
  }
  getUserDetails() {
    this.userService.getUserDetails().subscribe(
      response => {
        this.userDetails = response
        
      }
    )
  }
  addMenu(item: any) {
    this.userService.addMenuToCart(item).subscribe(
      response => {
        this.getUserDetails()
        this.total()
      }
    )
  }
  removeMenu(item: any) {
    this.userService.removeMenuFromCart(item).subscribe(
      response => {
        this.getUserDetails()
        this.total()
      }
    )
  }
 
  totalValue:any
  total(){
    this.userService.getTotalOfCart().subscribe(
      response=>{
        this.totalValue=response
      }
    )
  }
  placeOrder(cart:any,totalValue:any){
    this.userService.confirmOrder(totalValue).subscribe(
      response=>{
        console.log("done")
        this.userService.emptyCart().subscribe(
          response=>{
            this.openSnackBar("Order Placed Succesfully")
            this.getUserDetails()
            this.total()
          }
        )
      }
    )
    
  }
  openSnackBar(msg:string) {
    this._snackBar.open(msg, 'ok', {
      duration:3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  


}
