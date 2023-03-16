import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { AdminService } from '../service/admin.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationService } from '../service/pagination.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  value ='';
  selectedValue=''
  filterType='';
  foods: any[] = [
    {value: 'restaurantName', viewValue: 'Restaurant Name'},
    {value: 'location', viewValue: 'Location'},
    {value: 'ratings', viewValue: 'Ratings'},
  ];

  constructor(private adminService:AdminService,private paginarionService:PaginationService) { 
    this.getAllRestorants()
  }
  @ViewChild(MatPaginator) paginator:MatPaginator

  ngOnInit(): void {
    
    this.fetchPosts()
    
  }
  allRestorants:any

  getAllRestorants(){
    this.adminService.getAllRestorants().subscribe(
      response=>{
        this.allRestorants=response;
        this.allRestorants.paginator=this.paginator;
      }
    )
  }

  details(){
    
  }



  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [3, 6, 9, 12];
  
  fetchPosts(): void {
    this.paginarionService.getAllPosts().subscribe(
      (response) => {
        this.POSTS = response;
        // console.log(response);
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
