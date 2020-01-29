import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [
  {
    path: '',
    component: InscriptionComponent,
  },
  { path: 'connexion',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  }
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule,],
  exports: [RouterModule]
})
export class ClientRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/