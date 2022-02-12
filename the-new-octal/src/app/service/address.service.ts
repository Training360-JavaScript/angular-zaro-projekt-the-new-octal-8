import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../model/address';

@Injectable({
  providedIn: 'root'
})


export class AddressService {

  apiUrl: string = environment.apiUrl;
  entityName: string = 'address';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.apiUrl}${this.entityName}`);
  }

  create(entity: Address): Observable<Address> {
    return this.http.post<Address>(`${this.apiUrl}${this.entityName}`, entity);
  }

/*
  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${this.entityName}/${id}`);
  }


  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}${this.entityName}/${entity.id}`,
      entity
    );
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${this.entityName}/${id}`);
  }

 */

}
