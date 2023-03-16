import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { RestaurantOwnerComponent } from '../restaurant-owner/restaurant-owner.component';
import { AdminService } from '../service/admin.service';
import { UpdateAddFormService } from '../service/update-add-form.service';

@Component({
  selector: 'app-update-edit-form',
  templateUrl: './update-edit-form.component.html',
  styleUrls: ['./update-edit-form.component.css']
})
export class UpdateEditFormComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router, private fb: FormBuilder,
    private dialog: MatDialog, private updateAddService: UpdateAddFormService,private _snackBar: MatSnackBar) {

  }
  menu: any
  ngOnInit(): void {
    this.menu = this.updateAddService.menus
    this.updateMenuForm.setValue(this.menu)
  }


  updateMenuForm = new FormGroup({
    "itemId": new FormControl('', [Validators.required]),
    "itemName": new FormControl('', [Validators.required]),
    "itemPrice": new FormControl('', [Validators.required]),
    "cuisine": new FormControl('', [Validators.required]),
    "rating": new FormControl('', [Validators.required]),
    
  })

  get itemId() { return this.updateMenuForm.get("itemId") }

  get itemName() { return this.updateMenuForm.get("itemName") }

  get itemPrice() { return this.updateMenuForm.get("itemPrice"); }

  get cuisine() { return this.updateMenuForm.get("cuisine"); }

  get rating() { return this.updateMenuForm.get("rating"); }


  sendUpdateMenuData() {
    this.adminService.updateMenu(this.updateMenuForm.value, this.menu.itemId).subscribe(
      (result) => {
        this.afterClosed()
        this._snackBar.open("Menu Updated Successfully","success",{duration:5000});

      }
    )
  }
  afterClosed(){
    this.dialog.closeAll()
  }

  
}
