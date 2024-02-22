
import { ProductsService } from '../../services/products.service';
import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../interfaces/Product.interface';

@Component({
  selector: 'app-semifrios',
  templateUrl: './semifrios.component.html',
  styleUrls: ['./semifrios.component.css']
})
export class SemifriosComponent implements OnInit {
  @Input() producto: any
  @Output() productoBorrado: EventEmitter<string> = new EventEmitter<string>();
  @Output() productoFavorito: EventEmitter<any> = new EventEmitter<any>();
  isAdmin: boolean = false
  semifrios: Producto[] = [];

  constructor(private authService: AuthService, private productService: ProductsService) { }

  ngOnInit(): void {
    this.getSemifrios();
  }

  getSemifrios(): void {
    this.productService.getSemifrios().subscribe(products => {
      this.semifrios = products;
    });
  }

  addToFavorites(id: string) {
    const favoritesFromLocal = JSON.parse(localStorage.getItem('favoritos')!);
    const existingIndex = favoritesFromLocal.findIndex((prodFav: any) => prodFav._id === id);
    
    if (existingIndex === -1) {
      // El producto no está en favoritos, así que lo agregamos
      favoritesFromLocal.push(this.semifrios.find(producto => producto._id === id));
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
  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe({
      next: (response) => {
        console.log(response);
    
        this.productoBorrado.emit(id);
      }
    });
  }
  onProductoBorrado(id: string) {
    this.semifrios = this.semifrios.filter(producto => producto._id !== id);
  }
}
