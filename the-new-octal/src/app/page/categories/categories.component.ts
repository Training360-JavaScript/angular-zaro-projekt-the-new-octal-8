import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Observable} from "rxjs";
import {Category} from "../../model/category";
import {TableColumn} from "../../model/table-column";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  sort: string = 'id';
  descendingOrder: boolean = false;
  list$: Observable<Category[]> = this.categoriesService.getAll();
  public phrase: string = '';

  columns: TableColumn[] = [
    {reference: 'id', message: 'ID'},
    {reference: 'name', message: 'NAME'},
    {reference: 'description', message: 'DESCRIPTION'},
  ];


  constructor(
    private categoriesService: CategoryService
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
