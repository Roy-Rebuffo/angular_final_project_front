import { ProductsService } from '../../services/products.service';
import { AuthService } from './../../../auth/services/auth.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() producto: any
@Output() productoBorrado: EventEmitter<string> = new EventEmitter<string>();
@Output() productoFavorito: EventEmitter<any> = new EventEmitter<any>();
isAdmin: boolean = false



isFavorito: boolean = false;
favoritos: any = JSON.parse(localStorage.getItem('favoritos')!)

  constructor(private authServive:AuthService, private productService: ProductsService){
    this.authServive.isAdmin().subscribe({
      next: (isAdmin) => this.isAdmin = isAdmin
    })
    
  }


  //Emito el producto borrado a products
  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe({
      next: (response) => {
        console.log(response);
    
        this.productoBorrado.emit(id);
      }
    });
  }

  addToFavorites(id: string) {
    const favoritesFromLocal = JSON.parse(localStorage.getItem('favoritos')!);
  
    const existingIndex = favoritesFromLocal.findIndex((prodFav: any) => prodFav._id === id);
    
    if (existingIndex === -1) {
      // El producto no está en favoritos, así que lo agregamos
      favoritesFromLocal.push(this.producto);
    } else {
      // El producto ya está en favoritos, así que lo eliminamos
      favoritesFromLocal.splice(existingIndex, 1);
    }
  
    // Actualizamos la lista de favoritos en el almacenamiento local
    localStorage.setItem('favoritos', JSON.stringify(favoritesFromLocal));
  }
  isFavorite(productId: string): boolean {
    const favoritesFromLocal = JSON.parse(localStorage.getItem('favoritos')!);
    return favoritesFromLocal.some((prodFav: any) => prodFav._id === productId);
  }
  
  

} 
