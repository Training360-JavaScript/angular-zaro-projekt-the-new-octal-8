import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { BillService } from 'src/app/service/bill.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private billService: BillService,
    private orderService: OrderService
  ) {}

  activeProducts$:  Observable<number> = this.productService.getNumberOfValue('active', true);
  activeCustomers$:  Observable<number> = this.customerService.getNumberOfValue('active', true);
  notPaidOrders$:  Observable<number> = this.orderService.getNumberOfValue('status', 'new');
  sumNotPaidBills$: Observable<number> = this.billService.getSumOfProperty('status', 'new','amount');

  ngOnInit(): void {}
}
