import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueComponent } from './catalogue/catalogue.component';


const routes: Routes = [
  {
    path: '',
    component: CatalogueComponent,
  },
  { path: 'detail/:id',
  loadChildren: () => import('./details-article/details-article.module').then(m => m.DetailsArticleModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class CatalogueComponentRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/