import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import {TableColumn} from "../../model/table-column";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  sort: string = 'id';
  descendingOrder: boolean = false;
  list$: Observable<Product[]> = this.productService.getAll();
  public phrase: string = '';

  columns: TableColumn[] = [
    {reference: 'id', message: 'ID'},
    {reference: 'name', message: 'NAME'},
    {reference: 'type', message: 'TYPE'},
    {reference: 'catID', message: 'CATID'},
    {reference: 'description', message: 'DESCRIPTION'},
    {reference: 'price', message: 'PRICE'},
    {reference: 'featured', message: 'FEATURED'},
    {reference: 'active', message: 'ACTIVE'},
  ];

  constructor(
    private productService: ProductService
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
    this.productService.delete(item.id).subscribe(() => {
        this.list$ = this.productService.getAll()
      }
    );
  }
}
