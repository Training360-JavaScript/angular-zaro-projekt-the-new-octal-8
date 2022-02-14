import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../service/order.service";
import {Observable} from "rxjs";
import {Order} from "../../model/order";
import {TableColumn} from "../../model/table-column";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  sort: string = 'id';
  descendingOrder: boolean = false;
  list$: Observable<Order[]> = this.orderService.getAll();
  public phrase: string = '';

  columns: TableColumn[] = [
    {reference: 'id', message: 'ID'},
    {reference: 'customerID', message: 'CUSTOMERID'},
    {reference: 'productID', message: 'PRODUCTID'},
    {reference: 'amount', message: 'AMOUNT'},
    {reference: 'status', message: 'STATUS'},
  ];

  constructor(
    private orderService: OrderService
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

  delete(item: { id: number }) {
    this.orderService.delete(item.id).subscribe(() => {
        this.list$ = this.orderService.getAll()
      }
    );
  }

}
