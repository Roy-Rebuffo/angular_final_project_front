import { Producto } from '../../interfaces/Product.interface';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesa-dulce-page',
  templateUrl: './mesa-dulce-page.component.html',
  styleUrls: ['./mesa-dulce-page.component.css']
})
export class MesaDulcePageComponent implements OnInit {
  products: Producto[] = []
  mesaDulceProducts: Producto[] = [];
  constructor(private productsService: ProductsService ) {}

  
  ngOnInit(){
    this.productsService.getMesaDulceProducts().subscribe({
      next: (products: Producto[]) => {
        this.products = products
      },
      error: () => {}
    })
  }
}



// import { Producto } from '../../interfaces/Product.interface';
// import { ProductsService } from './../../services/products.service';
// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-mesa-dulce-page',
//   templateUrl: './mesa-dulce-page.component.html',
//   styleUrls: ['./mesa-dulce-page.component.css']
// })
// export class MesaDulcePageComponent implements OnInit {
//   products: Producto[] = []
//   constructor(private productsService: ProductsService ) {}


//   ngOnInit(){
//     this.productsService.getMesaDulceProducts().subscribe({
//       next: (products: Producto[]) => {
//         this.products = products
//       },
//       error: () => {}
//     })

//     const favoritesFromStorage = localStorage.getItem('favoritos');
//   if (favoritesFromStorage !== null) {
    
//     this.products = JSON.parse(favoritesFromStorage);
//   } else {
   
//     localStorage.setItem('favoritos', JSON.stringify([]));
//   }
// }
//   onProductoBorrado(id: string) {
//     this.products = this.products.filter(producto => producto._id !== id);
//   }

// }