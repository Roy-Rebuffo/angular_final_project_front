import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './modules/auth/guards/admin.guard';
import { verifyTokenGuard } from './modules/auth/guards/verify-token.guard';
import { LandingComponent } from './components/landing/landing.component';
import { MesaDulceComponent } from './modules/products/components/mesa-dulce/mesa-dulce.component';

import { AlfajoresGalletasComponent } from './modules/products/components/alfajores-galletas/alfajores-galletas.component';
import { SemifriosComponent } from './modules/products/components/semifrios/semifrios.component';
import { TartasPersonalizadasComponent } from './modules/products/components/tartas-personalizadas/tartas-personalizadas.component';
import { TartasTradicionalesComponent } from './modules/products/components/tartas-tradicionales/tartas-tradicionales.component';
import { ProfileComponent } from './modules/products/components/profile/profile.component';
import { ContactoComponent } from './modules/products/components/contacto/contacto.component';

const routes: Routes = [

{
  path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
},
{
  path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
},
{
  path: 'admin', canActivate: [adminGuard], loadChildren: () => import('./modules/administrator/administrator.module').then(m => m.AdministratorModule)
},
{
  path: 'landing', component: LandingComponent
},
{
  path: 'alfajores-galletas', component: AlfajoresGalletasComponent
},
{
  path: 'semifrios', component: SemifriosComponent
},
{
  path: 'tartas-personalizadas', component: TartasPersonalizadasComponent
},
{
  path: 'tartas-tradicionales', component: TartasTradicionalesComponent
},
{
  path: 'profile',canActivate: [verifyTokenGuard] ,component: ProfileComponent
},
{
  path: 'mesa-dulce', component: MesaDulceComponent
},
{
  path: 'contacto', component: ContactoComponent
},
//hace que si no encuentra ninguna ruta vaya a landing
{
  path: '**', redirectTo: 'landing', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }