import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductComponent } from './components/product/product.component';
import { MesaDulceComponent } from './components/mesa-dulce/mesa-dulce.component';
import { MesaDulcePageComponent } from './pages/mesa-dulce-page/mesa-dulce-page.component';
import { AlfajoresGalletasComponent } from './components/alfajores-galletas/alfajores-galletas.component';
import { SemifriosComponent } from './components/semifrios/semifrios.component';
import { TartasPersonalizadasComponent } from './components/tartas-personalizadas/tartas-personalizadas.component';
import { TartasTradicionalesComponent } from './components/tartas-tradicionales/tartas-tradicionales.component';
import { TartasTradiconalesComponent } from './pages/tartas-tradiconales/tartas-tradiconales.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactoComponent } from './components/contacto/contacto.component';





@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductComponent,
    MesaDulceComponent,
    MesaDulcePageComponent,
    AlfajoresGalletasComponent,
    SemifriosComponent,
    TartasPersonalizadasComponent,
    TartasTradicionalesComponent,
    TartasTradiconalesComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    ContactoComponent
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
