import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  list: any = [
    {"id":1,"name":"Sprouts - Corn","type":"Masonry","catID":4,"description":"Dilation of Ascending Colon, Percutaneous Approach","price":72,"featured":false,"active":true},
    {"id":2,"name":"Wonton Wrappers","type":"Waterproofing & Caulking","catID":2,"description":"Insert Intralum Dev in Inf Mesent Vein, Perc Endo","price":35,"featured":true,"active":false},
    {"id":3,"name":"Soup - Knorr, Ministrone","type":"Structural and Misc Steel (Fabrication)","catID":3,"description":"Removal of Intraluminal Device from Left Ear, Open Approach","price":74,"featured":false,"active":false},
    {"id":4,"name":"Pork - Bones","type":"Framing (Steel)","catID":10,"description":"Integumentary Integrity Assessment of Musculosk Low Back/LE","price":71,"featured":true,"active":true},
    {"id":5,"name":"Miso Paste White","type":"Ornamental Railings","catID":4,"description":"Electrocochleography Assess w Electrophysiologic Equip","price":64,"featured":true,"active":false}
  ];
  keys: any = Object.keys(this.list[0])
  .map
  (
    item => item.toUpperCase()
  );

  constructor() { }

  ngOnInit(): void {
  }

}
