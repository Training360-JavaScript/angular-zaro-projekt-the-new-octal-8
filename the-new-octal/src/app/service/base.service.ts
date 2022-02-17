import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter, reduce, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends {id: number, [key: string]: any}> {

  apiUrl: string = environment.apiUrl;

  entityName: string = '';

  constructor(
    public http: HttpClient,
  ) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${this.entityName}`, entity);
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

  getNumberOfValue(property: string, value: string | boolean): Observable<number> {
    return  this.getAll().pipe(map(item => item.filter(i => i[property] == value).length))
   }

   getSumOfProperty(property: string, value:string|boolean, toSum:string): Observable<number>{
    return this.getAll()
    .pipe
    (map
      (
        item => item
        .filter(i => i[property] == value)
        .map(item => item[toSum])
        .reduce((curr,next) => curr+next)
      )
    );
    }

    sum(property: string, value?: string | boolean): Observable<number> {
      if (value) {
        return this.getAll().pipe(map(item => item.filter((i) => {
          if (typeof (i[property]) === 'boolean') { return (i[property] == value); }
          if ((typeof (i[property]) === 'string') && (value !== '')) { return i[property].toLowerCase().includes((value as string).toLowerCase()); }
          else { return true }
        }
        ).length))
      }
      else //number
      {
        return this.getAll().pipe(map(list => list.reduce((acc, next) => {
          if (typeof (next[property]) === 'number') return next[property] + acc;
          if ((typeof (next[property]) === 'string') && (value !== ''))  return ++acc;
          if (typeof (next[property])) return next[property] + acc; //boolean és true

        }
          , 0)))
      }

    }


    // filter(i => i[property] == value),
    // map(i => i[toSum]),
    // reduce((acc,act) => acc+act)
}
