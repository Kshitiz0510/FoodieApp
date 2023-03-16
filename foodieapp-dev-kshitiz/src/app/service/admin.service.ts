import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  adminAppBaseUrl="http://localhost:797/admin-app"

  getAllRestorants(){
    return this.http.get(this.adminAppBaseUrl+"/get-all-restaurant")
  }

  getAllNewRestorants(){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions={headers :httpHeaders}
    return this.http.get(this.adminAppBaseUrl+'/get-all-new-restaurant',requestOptions)
  }

  addRestaurent(restaurent:any){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions={headers :httpHeaders}
    return this.http.post(this.adminAppBaseUrl+'/add-restaurant',restaurent,requestOptions)
  }
  addNewRestaurent(newRestaurent:any,selectedFile: File){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions={headers :httpHeaders}
    const fd = new FormData()
    fd.append('restaurantImage', selectedFile);
    fd.append('newRestaurant', JSON.stringify(newRestaurent))
    return this.http.post(this.adminAppBaseUrl+'/add-new-restaurant/',fd,requestOptions)
  }
  deleteRestaurent(restaurentId:string){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions={headers :httpHeaders}
    return this.http.delete(this.adminAppBaseUrl+'/delete-restaurant/'+restaurentId,requestOptions)
  }
  deleteNewRestaurant(restaurentId:string){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions={headers :httpHeaders}
    return this.http.delete(this.adminAppBaseUrl+'/delete-new-restaurant/'+restaurentId,requestOptions)
  }
  // editRestaurent(restaurant:any){
  //   let httpHeaders=new HttpHeaders({
  //     'Authorization':'Bearer '+localStorage.getItem('jwt')
  //   });
  //   let requestOptions={headers :httpHeaders}
  //   return this.http.put(this.adminAppBaseUrl+'/update-restaurant',restaurant,requestOptions)

  // }

  // --------------------------------------shivani-------------------------------------------------------
  getRestaurentByEmailId(){
    return this.http.get(this.adminAppBaseUrl+"/get-restaurantByEmailId/"+localStorage.getItem('currentEmail'))
  }

  addMenu(menu:any, selectedFile: File,restaurentId:any) {
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions={headers :httpHeaders}
    const fd = new FormData()
    fd.append('itemImage', selectedFile);
    fd.append('menu', JSON.stringify(menu))
    console.log(menu)
    return this.http.post(this.adminAppBaseUrl + "/add-menu/"+restaurentId, fd,requestOptions);
  }

  updateMenu(menu:any,itemId:any){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions={headers :httpHeaders}
    return this.http.put(this.adminAppBaseUrl+'/update-menu/'+itemId,menu,requestOptions)
  }
  
  deleteMenu(menu:any,itemId:any){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions={headers :httpHeaders}
    return this.http.post(this.adminAppBaseUrl+'/delete-menuItem/'+itemId,menu,requestOptions)
  }
  // --------------------------------------------kshitiz-----------------------------------------------
  getResturantById(id?:any){
    return this.http.get(this.adminAppBaseUrl+"/get-returantById/"+id);
  }
}
