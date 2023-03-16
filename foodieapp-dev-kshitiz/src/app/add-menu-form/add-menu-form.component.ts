import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RestaurantOwnerComponent } from '../restaurant-owner/restaurant-owner.component';
import { AdminService } from '../service/admin.service';
import { UpdateAddFormService } from '../service/update-add-form.service';

@Component({
  selector: 'app-add-menu-form',
  templateUrl: './add-menu-form.component.html',
  styleUrls: ['./add-menu-form.component.css']
})
export class AddMenuFormComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router, private fb: FormBuilder,
    private dialog: MatDialog, private updateAddService: UpdateAddFormService,private _snackBar: MatSnackBar) {

  }
  restaurentId: any
  ngOnInit(): void {
    this.restaurentId = this.updateAddService.restaurentId
  }


  addMenuForm = new FormGroup({
    "itemName": new FormControl('', [Validators.required]),
    "itemPrice": new FormControl('', [Validators.required]),
    "cuisine": new FormControl('', [Validators.required]),
    "rating": new FormControl('', [Validators.required]),
    // "file": new FormControl('', [Validators.required]),
  })


  get itemName() { return this.addMenuForm.get("itemName") }

  get itemPrice() { return this.addMenuForm.get("itemPrice"); }

  get cuisine() { return this.addMenuForm.get("cuisine"); }

  get rating() { return this.addMenuForm.get("rating"); }

  // get file() { return this.addMenuForm.get("file"); }
  

  selectedFile: File=null;
  onFileChanged(event:any) {
    console.log(event)
    this.selectedFile = <File>event.target.files[0]
  }

  addMenuData(){
    this.adminService.addMenu(this.addMenuForm.value,this.selectedFile,this.restaurentId).subscribe(
      response=>{
        this.afterClosed()
        this._snackBar.open("Menu added","Success",{duration:5000});
      }
    )
  }
  afterClosed(){
    this.dialog.closeAll()
  }
}
