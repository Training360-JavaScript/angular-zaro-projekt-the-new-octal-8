import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  list: any[] = [
    {"id":1,"firstName":"Ilka","lastName":"Perschke","email":"iperschke0@slideshare.net","address":"3136 Pepper Wood Hill","active":true},
    {"id":2,"firstName":"Waylon","lastName":"Leavens","email":"wleavens1@mapy.cz","address":"55839 Lakewood Gardens Drive","active":true},
    {"id":3,"firstName":"Caryl","lastName":"Berrington","email":"cberrington2@wunderground.com","address":"8 Dixon Circle","active":true},
    {"id":4,"firstName":"Heloise","lastName":"Stoddart","email":"hstoddart3@psu.edu","address":"59593 Shelley Crossing","active":false},
    {"id":5,"firstName":"Guendolen","lastName":"Theobalds","email":"gtheobalds4@about.me","address":"507 International Court","active":false}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
