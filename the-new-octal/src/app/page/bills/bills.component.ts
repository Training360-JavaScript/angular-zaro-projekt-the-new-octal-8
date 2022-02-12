import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  list: any[] = [
    {"id":1,"orderID":598,"amount":904,"status":"new"},
    {"id":2,"orderID":485,"amount":256,"status":"new"},
    {"id":3,"orderID":346,"amount":76,"status":"new"},
    {"id":4,"orderID":956,"amount":661,"status":"new"},
    {"id":5,"orderID":203,"amount":271,"status":"new"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
