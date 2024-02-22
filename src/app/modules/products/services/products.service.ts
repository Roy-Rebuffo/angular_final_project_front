import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/Product.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
      return this.http.get<Producto[]>('https://angular-back-final-project.vercel.app/api/products')
  }
  deleteProduct(id: string){
    return this.http.delete<Producto>(`https://angular-back-final-project.vercel.app/api/products/delete/${id}`)
  }

  // servicio para obtener solo los de mesa dulce
  getMesaDulceProducts(): Observable<Producto[]> {
    return this.getProducts().pipe(
      map(products => products.filter(product => product.category === 'Mesa dulce'))
    );
  }
  getAlfajoresyGalletas(): Observable<Producto[]> {
    return this.getProducts().pipe(
      map(products => products.filter(product => product.category === 'Alfajores y galletas'))
    );
  }
  getSemifrios(): Observable<Producto[]> {
    return this.getProducts().pipe(
      map(products => products.filter(product => product.category === 'Semifríos'))
    );
  }
  getTartasPersonalizadas(): Observable<Producto[]> {
    return this.getProducts().pipe(
      map(products => products.filter(product => product.category === 'Tartas personalizadas'))
    );
  }
  getTartasTradicionales(): Observable<Producto[]> {
    return this.getProducts().pipe(
      map(products => products.filter(product => product.category === 'Tartas tradicionales'))
    );
  }
}
