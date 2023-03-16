import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {

  constructor(private adminService:AdminService) {
    this.getAllResturant();
   }
   value ='';
   filterType='';
  ngOnInit(): void {
  }

  getAllResturantsDetails:any;
  getAllResturant(){
    console.log("Inside getAllResturant outside subscribe")
    this.adminService.getAllRestorants().subscribe(
      response=>{
        this.getAllResturantsDetails=response;
        console.log("Inside GetAllResturant Function")
        console.log(this.getAllResturantsDetails)
      }
    )
  }
  selectedResturantDetails:any
  selectedResturant(value:any){
    this.selectedResturantDetails=value;
  }

}
