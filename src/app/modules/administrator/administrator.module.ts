import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { AdministratorMainPageComponent } from './pages/administrator-main-page/administrator-main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AssignTokenInterceptor } from '../auth/interceptors/assign-token.interceptor';
import { EditProductComponent } from './components/edit-product/edit-product.component';


@NgModule({
  declarations: [
    CreateProductPageComponent,
    CreateProductFormComponent,
    AdministratorMainPageComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AssignTokenInterceptor,
      multi: true
    }
  ],
})
export class AdministratorModule { }
