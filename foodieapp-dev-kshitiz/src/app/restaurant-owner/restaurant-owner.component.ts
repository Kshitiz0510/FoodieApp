import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { UpdateEditFormComponent } from '../update-edit-form/update-edit-form.component';
import { UpdateAddFormService } from '../service/update-add-form.service';
import { AddMenuFormComponent } from '../add-menu-form/add-menu-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaginationService } from '../service/pagination.service';
@Component({
  selector: 'app-restaurant-owner',
  templateUrl: './restaurant-owner.component.html',
  styleUrls: ['./restaurant-owner.component.css']
})
export class RestaurantOwnerComponent implements OnInit {

  @Input() public rating:any;

  constructor(private adminService: AdminService, private router: Router, private fb: FormBuilder, private dialog: MatDialog, private updateAddService: UpdateAddFormService, private _snackBar: MatSnackBar,private paginarionService: PaginationService) {
    this.getRestaurantByEmailId();
    this.fetchPosts()
  }

  ngOnInit(): void {
  }
  public math = Math;

  toggle: boolean = false;
  owerRestaurent: any;
  allMenu: any;
  getRestaurantByEmailId() {
    this.adminService.getRestaurentByEmailId().subscribe(
      response => {
        this.owerRestaurent = response;
        console.log(response)
      }
    )
  }

  getEditMenu(menu: any) {
    this.updateAddService.sendMenus(menu)
    this.dialog.open(UpdateEditFormComponent, { disableClose: true });
    this.dialog.afterAllClosed.subscribe(result => {
      this.getRestaurantByEmailId()
    });
  }
  deleteMenu(menu: any, itemId: any) {
    if (confirm('Are you sure You Want To Delete This Menu'))
    this.adminService.deleteMenu(menu, itemId).subscribe(
      response => {
        this._snackBar.open("Menu deleted", "success", { duration: 5000 });
        this.getRestaurantByEmailId()
      }
    )
  }
  addMenu(restaurantId: any) {
    console.log(restaurantId)
    this.updateAddService.sendRestaurentId(restaurantId)
    this.dialog.open(AddMenuFormComponent, { disableClose: true });
    this.dialog.afterAllClosed.subscribe(result => {
      this.getRestaurantByEmailId()
    });
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
