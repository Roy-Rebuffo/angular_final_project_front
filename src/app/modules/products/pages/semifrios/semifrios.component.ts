import { Producto } from '../../interfaces/Product.interface';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semifrios',
  templateUrl: './semifrios.component.html',
  styleUrls: ['./semifrios.component.css']
})
export class SemifriosComponent implements OnInit {
  products: Producto[] = []
  constructor(private productsService: ProductsService ) {}

  
  ngOnInit(){
    this.productsService.getSemifrios().subscribe({
      next: (products: Producto[]) => {
        this.products = products
      },
      error: () => {}
    })
  }
}