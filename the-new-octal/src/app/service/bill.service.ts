import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Bill } from '../model/bill';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BillService extends BaseService<Bill>{

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName = 'bill';
   }

   retval: number = 0;

   getSumByState(property: string, value: string | boolean): number{
      this.getAll().subscribe(ar => this.retval = ar
      .filter(item => item[property] == value)
      .map(item => item["amount"])
      .reduce((cumm,item) => { return  cumm + item}
      ));
      console.log(this.retval)
      return this.retval;
   }

}
