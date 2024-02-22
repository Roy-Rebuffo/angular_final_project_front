import { Producto } from '../../interfaces/Product.interface';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alfajores-galletas',
  templateUrl: './alfajores-galletas.component.html',
  styleUrls: ['./alfajores-galletas.component.css']
})
export class AlfajoresGalletasComponent implements OnInit {
  products: Producto[] = []
  constructor(private productsService: ProductsService ) {}

  
  ngOnInit(){
    this.productsService.getAlfajoresyGalletas().subscribe({
      next: (products: Producto[]) => {
        this.products = products
      },
      error: () => {}
    })
  }
}