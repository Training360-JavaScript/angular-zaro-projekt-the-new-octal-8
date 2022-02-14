import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Observable} from "rxjs";
import {Category} from "../../model/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  list$: Observable<Category[]> = this.categoriesService.getAll();


  constructor(
    private categoriesService: CategoryService
  ) { }

  ngOnInit(): void {
  }

}
