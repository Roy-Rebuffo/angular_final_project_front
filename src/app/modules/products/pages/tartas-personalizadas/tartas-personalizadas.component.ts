import { Producto } from '../../interfaces/Product.interface';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tartas-personalizadas',
  templateUrl: './tartas-personalizadas.component.html',
  styleUrls: ['./tartas-personalizadas.component.css']
})
export class TartasPersonalizadasComponent implements OnInit {
  products: Producto[] = []
  constructor(private productsService: ProductsService ) {}

  
  ngOnInit(){
    this.productsService.getTartasPersonalizadas().subscribe({
      next: (products: Producto[]) => {
        this.products = products
      },
      error: () => {}
    })
  }
}