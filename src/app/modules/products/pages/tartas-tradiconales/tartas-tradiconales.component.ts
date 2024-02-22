import { Producto } from '../../interfaces/Product.interface';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tartas-tradiconales',
  templateUrl: './tartas-tradiconales.component.html',
  styleUrls: ['./tartas-tradiconales.component.css']
})
export class TartasTradiconalesComponent implements OnInit {
  products: Producto[] = []
  constructor(private productsService: ProductsService ) {}

  
  ngOnInit(){
    this.productsService.getTartasTradicionales().subscribe({
      next: (products: Producto[]) => {
        this.products = products
      },
      error: () => {}
    })
  }
}