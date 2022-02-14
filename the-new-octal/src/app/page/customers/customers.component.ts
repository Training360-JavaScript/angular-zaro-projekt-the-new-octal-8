import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import {TableColumn} from "../../model/table-column";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  sort: string = 'id';
  descendingOrder: boolean = false;
  list$: Observable<Customer[]> = this.customerService.getAll();
  public phrase: string = '';

  columns: TableColumn[] = [
    {reference: 'id', message: 'ID'},
    {reference: 'firstName', message: 'FIRSTNAME'},
    {reference: 'lastName', message: 'LASTNAME'},
    {reference: 'email', message: 'EMAIL'},
    {reference: 'address_zip', message: 'ZIP'},
    {reference: 'address_country', message: 'COUNTRY'},
    {reference: 'address_city', message: 'CITY'},
    {reference: 'address_street', message: 'STREET'},
    {reference: 'active', message: 'ACTIVE'},
  ];


  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
  }

  onChangeOrder(reference: string) {
    if (reference == this.sort) {
      this.descendingOrder =! this.descendingOrder;
    } else {
      this.sort = reference;
      this.descendingOrder = false;
    }
  }

}
