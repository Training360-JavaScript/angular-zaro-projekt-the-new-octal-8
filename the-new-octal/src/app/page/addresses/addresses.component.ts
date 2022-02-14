import { Component, OnInit } from '@angular/core';
import {AddressService} from "../../service/address.service";
import {Observable} from "rxjs";
import {Address} from "../../model/address";

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  list$: Observable<Address[]> = this.addressService.getAll();

  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit(): void {
  }

}
