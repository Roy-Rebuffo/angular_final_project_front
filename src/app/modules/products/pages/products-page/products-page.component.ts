import { Producto } from '../../interfaces/Product.interface';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  products: Producto[] = []
  constructor(private productsService: ProductsService ) {}


  ngOnInit(){
    this.productsService.getProducts().subscribe({
      next: (products: Producto[]) => {
        this.products = products
      },
      error: () => {}
    })

    const favoritesFromStorage = localStorage.getItem('favoritos');
  if (favoritesFromStorage !== null) {
    
    this.products = JSON.parse(favoritesFromStorage);
  } else {
   
    localStorage.setItem('favoritos', JSON.stringify([]));
  }
}
  onProductoBorrado(id: string) {
    this.products = this.products.filter(producto => producto._id !== id);
  }

}
