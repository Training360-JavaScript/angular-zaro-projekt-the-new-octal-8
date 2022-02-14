import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../service/order.service";
import {Observable} from "rxjs";
import {Order} from "../../model/order";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  list$: Observable<Order[]> = this.orderService.getAll();

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
  }

}
