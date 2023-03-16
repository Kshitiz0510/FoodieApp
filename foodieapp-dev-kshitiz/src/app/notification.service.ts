import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private matSnackBar:MatSnackBarModule) { }

  config:MatSnackBarConfig={
    duration:3000,
    horizontalPosition:'right',
    verticalPosition:'top'
  }
  // sucess(msg){
  //   this.matSnackBar.open(msg,'',this.config)
  // }
}
