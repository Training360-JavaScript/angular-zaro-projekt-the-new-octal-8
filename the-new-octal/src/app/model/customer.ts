import {Address} from "./address";

export class Customer {
  [key: string]: any;

  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address: Address = new Address();
  active: boolean = false;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    address: Address,
    active: boolean
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.active = active;
  }

  get address_zip(): number {
    return this.address.zip;
  }

  get address_country(): string {
    return this.address.country;
  }

  get address_city(): string {
    return this.address.city;
  }

  get address_street(): string {
    return this.address.street;
  }

}
