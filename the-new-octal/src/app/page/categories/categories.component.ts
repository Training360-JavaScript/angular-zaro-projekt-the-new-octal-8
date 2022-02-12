import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  list: any[] = [
    {"id":1,"name":"food","description":"Nondisp fx of medial malleolus of left tibia, sequela"},
    {"id":2,"name":"electronic","description":"Minor laceration of right kidney"},
    {"id":3,"name":"car parts","description":"Unsp physl fx low end humer, r arm, subs for fx w delay heal"},
    {"id":4,"name":"electronic","description":"Pnctr w fb of unsp toe(s) w damage to nail, sequela"},
    {"id":5,"name":"electronic","description":"Unsp opn wnd r bk wl of thorax w/o penet thor cavity, subs"}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
