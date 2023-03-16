import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  authAppbaseUrl = "http://localhost:797/auth-app-a1";
  UserOperationsUrl = "http://localhost:797/user-app-a1";

  registerUser(signupData: any, selectedFile: File) : Observable<any>{
    const fd = new FormData()
    fd.append('file', selectedFile);
    fd.append('userData', JSON.stringify(signupData))
    console.log(signupData)
    return this.http.post(this.authAppbaseUrl + "/register-user", fd).pipe(
      catchError(this.handleError)
    );
  }
  userDetails: any
  getUserDetails() {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = { headers: httpHeaders }
    this.userDetails = this.http.get(this.UserOperationsUrl + '/get-user-details', requestOptions);
    return this.http.get(this.UserOperationsUrl + '/get-user-details', requestOptions);
  }
  loginCheck(loginData: any): Observable<any> {

    return this.http.post(this.authAppbaseUrl + "/login-check", loginData).pipe(
      catchError(this.handleError)
    );
  }
  isloggedIn() {
    return !!localStorage.getItem('jwt')
  }
  rollCheck() {
    // console.log("roolcheck")
    const role = localStorage.getItem("role")
    // console.log(role)
    if (role == "USER" || role == "RESTAURANT-OWNER") {
      return true
    }
    else {
      return false
    }

  }
  rollCheckAdmin(){
    const role = localStorage.getItem("role")
    // console.log(role)
    if (role == "ADMIN") {
      return true
    }
    else {
      return false
    }
  }
  rollCheckOwner(){
    const role = localStorage.getItem("role")
    // console.log(role)
    if (role == "RESTAURANT-OWNER") {
      return true
    }
    else {
      return false
    }
  }
  rollCheckUser() {
    // console.log("roolcheck")
    const role = localStorage.getItem("role")
    // console.log(role)
    if (role == "USER") {
      return true
    }
    else {
      return false
    }

  }

  updateRole(emailId:string,role:string) {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = { headers: httpHeaders }
    return this.http.post(this.authAppbaseUrl + '/update-role/'+role+'/'+emailId,'', requestOptions);
  }
  addMenuToCart(menu: any) {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = { headers: httpHeaders }
    return this.http.post(this.UserOperationsUrl + '/addMenuToCart', menu, requestOptions);
  }
  removeMenuFromCart(menu: any) {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = { headers: httpHeaders }
    return this.http.post(this.UserOperationsUrl + '/removeMenuFromCart', menu, requestOptions);
  }
  emptyCart() {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = { headers: httpHeaders }
    return this.http.delete(this.UserOperationsUrl + '/empty-cart', requestOptions)
  }
  getTotalOfCart() {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = { headers: httpHeaders }
    return this.http.get(this.UserOperationsUrl + '/getTotalOfCart', requestOptions);
  }
  confirmOrder(totalValue:any){
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = { headers: httpHeaders }
    return this.http.post(this.authAppbaseUrl+'/confirm-order/'+totalValue,"",requestOptions)
  }
  // --------------------------------kshitiz--------------------------------------------
  UserFavouriteList(item: any) {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = { headers: httpHeaders }
    return this.http.post(this.UserOperationsUrl + '/add-menuItem', item, requestOptions);
  }
  removeFromFavouriteList(item: any) {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = { headers: httpHeaders }
    return this.http.post(this.UserOperationsUrl + '/remove-menuItem', item, requestOptions);
  }

  private handleError(error: HttpErrorResponse) {
    let errormessage = ''
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else if (error.status === 400) {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
      // errormessage=` incorrect user id or password Bakend returned code ${error.status},body was`,error.error
      errormessage = ` incorrect user id or password Bakend returned code ${error.status}`
    } else if(error.status === 409){
      errormessage = ` User already Exists Email Id Alredy Used ${error.status}`
    }
    else {
      // errormessage=`Bakend returned code ${error.status},body was`,error.error
    }
    // Return an observable with a user-facing error message.
    // errormessage+=' Something bad happened; please try again later.'
    return throwError(() => new Error(errormessage));
  }

}
