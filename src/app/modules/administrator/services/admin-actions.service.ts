import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../products/interfaces/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminActionsService {

constructor(private http: HttpClient) { }

createProduct(product: any){
  return this.http.post('https://angular-back-final-project.vercel.app/api/products/post', product)
}

getProducts(){
  return this.http.get('https://angular-back-final-project.vercel.app/api/products')
}

getProductById(id: string){
  return this.http.get(`https://angular-back-final-project.vercel.app/api/products/${id}`)
}

editProduct(id: string, productToEdit: FormData){
  return this.http.patch<Producto>(`https://angular-back-final-project.vercel.app/api/products/edit/${id}`, productToEdit)
}

}
