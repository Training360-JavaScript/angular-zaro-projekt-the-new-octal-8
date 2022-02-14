import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BillService} from "../../service/bill.service";
import {Observable} from "rxjs";
import {Bill} from "../../model/bill";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  list$: Observable<Bill[]> = this.billService.getAll();

  constructor(
    private router: Router,
    private billService: BillService
  ) { }

  ngOnInit(): void {
  }

  editBill(item:any): void {
    this.router.navigateByUrl(`/edit-bill/${item.id}`);
    console.log(item);
  }

}
