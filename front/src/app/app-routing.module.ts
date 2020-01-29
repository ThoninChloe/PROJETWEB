import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './pageStructure/body/body.component';
import { AccessProductGuard} from './guards/accesProductGuard'
import { LoginComponent } from './modules/client-account/login/login.component';


const routes: Routes = [
  { path: '',
    component:BodyComponent },
  { path: 'home',
    component:BodyComponent },
  { path: 'inscription',
    loadChildren: () => import('./modules/client-account/client-account.module').then(m => m.ClientAccountModule)},
  { path: 'catalogue',
  canActivate : [
    AccessProductGuard
  ],
    loadChildren: () => import('./modules/catalogue/catalogue.module').then(m => m.CatalogueModule) },
  { path: 'panier',
    loadChildren: () => import('./modules/panier/panier.module').then(m => m.PanierModule) 
  },
  
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
