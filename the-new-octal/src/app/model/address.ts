export class Address {
  [key: string]: any;
  //id: number = 0;
  zip: number = 0;
  city: string = '';
  country: string = '';
  street: string = '';
  notes: string = '';

  get full(): string {
    return [
      this.zip,
      this.country,
      this.city,
      this.street,
    ].join(', ');
  }

}
