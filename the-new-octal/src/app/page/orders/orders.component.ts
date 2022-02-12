import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  list: any[] = [
    {"id":1,"customerID":476,"productID":973,"amount":9,"status":"new"},
    {"id":2,"customerID":444,"productID":777,"amount":9,"status":"shipped"},
    {"id":3,"customerID":639,"productID":765,"amount":2,"status":"new"},
    {"id":4,"customerID":829,"productID":24,"amount":8,"status":"paid"},
    {"id":5,"customerID":484,"productID":77,"amount":4,"status":"shipped"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
