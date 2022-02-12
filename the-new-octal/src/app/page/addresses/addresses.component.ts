import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  list: any[] = [
    {"id":1,"zip":2423,"country":"Dominican Republic","city":"Baitoa","street":"West","notes":"Bystolic"},
    {"id":2,"zip":1225,"country":"Sweden","city":"Karlskoga","street":"Mallory","notes":"Pediatric Infuvite Multiple Vitamins for Infusion"},
    {"id":3,"zip":4880,"country":"Brazil","city":"Santa Cruz Cabrália","street":"Emmet","notes":"NP Thyroid 60"},
    {"id":4,"zip":8869,"country":"Zimbabwe","city":"Mvuma","street":"Montana","notes":"morphine sulfate"},
    {"id":5,"zip":6786,"country":"Sweden","city":"Götene","street":"Comanche","notes":"Isosorbide Dinitrate"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
