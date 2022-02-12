import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  activeProducts: number = 27; //mock data

  activeCustomers: number = 155; //mock data

  notPaidOrders: number = 15; //mock data

  sumNotPaidBills: number = 15750; //mock data


  ngOnInit(): void {
  }

}
