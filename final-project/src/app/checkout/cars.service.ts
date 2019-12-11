import { IProduct } from '../products/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private remoteUrlPattern = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) { }

  public getAllcars(): Observable<Array<IProduct>> {
    const cars$ = this.http.get<IProduct[]>(this.remoteUrlPattern);
    return cars$;
  }

  public getcarBycarname(carname: string): Observable<Array<IProduct>> {
    const car$ = this.http.get<IProduct[]>(this.remoteUrlPattern + `/${carname}`);
    return car$;
  }

  public getcarById(id: number): Observable<Array<IProduct>> {
    const car$ = this.http.get<IProduct[]>(this.remoteUrlPattern + `/${id}`);
    return car$;
  }
  public saveNewcar(car: Object): Observable<IProduct> {
    const car$ = this.http.post<IProduct>(this.remoteUrlPattern, car);
    return car$;
  }

  public updateUse(car: IProduct): Observable<IProduct> {
    const car$ = this.http.put<IProduct>(this.remoteUrlPattern + `/${car.productId}`, car);
    return car$;
  }
}

