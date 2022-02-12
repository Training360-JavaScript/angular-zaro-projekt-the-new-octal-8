import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { Product } from 'src/app/model/product';
import { CustomerService } from 'src/app/service/customer.service';
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
  ) {}

  activeProducts$: Observable<Product[]> = this.productService.getAll();
  activeCustomers$: Observable<Customer[]> = this.customerService.getAll();

  activeProducts: number = 0;
  activeCustomers: number = 0;
  notPaidOrders: number = 0;
  sumNotPaidBills: number = 0;

  ap = this.activeProducts$.subscribe((productList) => {
    productList.forEach((element) => {
      if (element.active) {
        this.activeProducts++;
      }
    });
  });

  ac = this.activeCustomers$.subscribe((customerList) => {
    customerList.forEach((element) => {
      if (element.active) {
        this.activeCustomers++;
      }
    });
  });

  ngOnInit(): void {}
}
