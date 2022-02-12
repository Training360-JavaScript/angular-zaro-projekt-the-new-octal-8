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

  products$: Observable<Product[]> = this.productService.getAll();
  customers$: Observable<Customer[]> = this.customerService.getAll();
  orders$: Observable<Order[]> = this.orderService.getAll();
  bills$: Observable<Bill[]> = this.billService.getAll();

  activeProducts: number = 0;
  activeCustomers: number = 0;
  notPaidOrders: number = 0;
  sumNotPaidBills: number = 0;

  ap = this.products$.subscribe((productList) => {
    productList.forEach((element) => {
      if (element.active) {
        this.activeProducts++;
      }
    });
  });

  ac = this.customers$.subscribe((customerList) => {
    customerList.forEach((element) => {
      if (element.active) {
        this.activeCustomers++;
      }
    });
  });

  npo = this.orders$.subscribe((orderList) => {
    orderList.forEach((element) => {
      if (element['status'] == 'new') {
        this.notPaidOrders++;
      }
    });
  });

  snpb = this.bills$.subscribe((billList) => {
    billList.forEach((element) => {
      if (element['status'] == 'new') {
        this.sumNotPaidBills += element['amount'];
      }
    });
  });

  ngOnInit(): void {}
}
