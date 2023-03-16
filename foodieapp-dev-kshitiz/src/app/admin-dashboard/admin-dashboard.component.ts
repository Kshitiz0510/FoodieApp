import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../service/admin.service';
import { PaginationService } from '../service/pagination.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  constructor(private adminService: AdminService, private userService: UserService, private _snackBar: MatSnackBar, private paginarionService: PaginationService) {
    this.getAllNewRestorants();
    this.getAllRestorants();
    this.fetchPosts();
  }

  ngOnInit(): void {

  }
  value = '';
  filterType = '';
  message: string = ""
  action: string = ""
  toggle: boolean = false
  allRestorants: any

  selectedValue=''
 
  foods: any[] = [
    {value: 'restaurantName', viewValue: 'Restaurant Name'},
    {value: 'location', viewValue: 'Location'},
    {value: 'ratings', viewValue: 'Ratings'},
  ];
  allNewRestorants: any
  getAllNewRestorants() {
    this.adminService.getAllNewRestorants().subscribe(
      response => {
        this.allNewRestorants = response;

      }
    )
  }

  restaurantDetailForm = new FormGroup({
    'restaurantName': new FormControl('', Validators.required),
    'location': new FormControl('', Validators.required),
    'ratings': new FormControl('', Validators.required),
    'emailId': new FormControl('', Validators.required),
    'restaurantImage': new FormControl()
  });

  get restaurantName() { return this.restaurantDetailForm.get("restaurantName") }
  get location() { return this.restaurantDetailForm.get("location") }
  get ratings() { return this.restaurantDetailForm.get("ratings") }
  get emailId() { return this.restaurantDetailForm.get("emailId") }
  get restaurantImage() { return this.restaurantDetailForm.get("restaurantImage") }
  setValuesss(n: any) {
    this.restaurantName.setValue(n.restaurantName)
    this.location.setValue(n.location)
    this.ratings.setValue(n.ratings)
    this.emailId.setValue(n.emailId)
    this.restaurantImage.setValue(n.restaurantImage)
  }

  sendSignupData() {
    console.log(this.restaurantDetailForm.value);
    this.adminService.addRestaurent(this.restaurantDetailForm.value).subscribe(
      response => {
        this._snackBar.open(this.message = 'restaurent added', this.action, { duration: 5000 });
      }
    )
    this.userService.updateRole(this.restaurantDetailForm.value.emailId, 'RESTAURANT-OWNER').subscribe(

      response => {
        this._snackBar.open(this.message = 'role updated', this.action, { duration: 5000 });
        this.getAllRestorants()
        this.fetchPosts();
      }
    )
    this.deleteNewRestaurant(this.restaurantDetailForm.value.emailId);
    this.getAllNewRestorants();
    

  }
  getAllRestorants() {
    this.adminService.getAllRestorants().subscribe(
      response => {
        this.allRestorants = response;
      }
    )
  }
  deleteRestaurent(restaurantId: string,emailId:string) {
    if (confirm('are you sure'))
    this.adminService.deleteRestaurent(restaurantId).subscribe(
      response => {
        this._snackBar.open(this.message = 'Restaurant Deleted', this.action, { duration: 5000 });
      }
    )
    this.userService.updateRole(emailId, 'USER').subscribe(
      response => {
        this._snackBar.open(this.message = 'role updated', this.action, { duration: 5000 });
        this.getAllRestorants()
        this.fetchPosts();
      }
    )
  }
  deleteNewRestaurant(restaurantId: string) {
    if (confirm('are you sure'))
      this.adminService.deleteNewRestaurant(restaurantId).subscribe(
        response => {
          this._snackBar.open(this.message = 'Restaurant Deleted From Temp Database', this.action, { duration: 5000 });
          this.getAllNewRestorants

        }
      )
  }


  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [3, 6, 9, 12];

  fetchPosts(): void {
    this.paginarionService.getAllPosts().subscribe(
      (response) => {
        this.POSTS = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}

