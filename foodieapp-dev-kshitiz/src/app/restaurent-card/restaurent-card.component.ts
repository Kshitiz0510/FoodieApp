import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurent-card',
  templateUrl: './restaurent-card.component.html',
  styleUrls: ['./restaurent-card.component.css']
})
export class RestaurentCardComponent implements OnInit {

  constructor() { }
  value ='';
  filterType='';
  ngOnInit(): void {
  }
  @Input()
  resturantDetails:any;
  public math = Math;
}
