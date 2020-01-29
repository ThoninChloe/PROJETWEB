import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierComponentRoutingModule } from './panier-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from '../catalogue/panier/panier.component';
import { ListePanierComponent } from './liste-panier/liste-panier.component';
import { NgxsModule  } from '@ngxs/store';
import { PanierState  } from './../../states/panierState';



@NgModule({
  declarations: [PanierComponent,
    ListePanierComponent,
   ],
  
  imports: [
    CommonModule,
    PanierComponentRoutingModule,
    HttpClientModule,
  ]
})
export class PanierModule { }
