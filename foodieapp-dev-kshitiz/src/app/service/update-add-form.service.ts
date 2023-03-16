import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UpdateAddFormService {

  
  constructor() { }
  menus:any;
  sendMenus(menus:any){
    this.menus=menus;
  }
  restaurentId:any
  sendRestaurentId(restaurentId:any){
    this.restaurentId=restaurentId
  }
  
}