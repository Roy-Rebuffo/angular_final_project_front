import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',  children: [
      {
        path: 'create-product', component: CreateProductPageComponent
      },
      {
        path: 'edit-product/:id', component: EditProductComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
