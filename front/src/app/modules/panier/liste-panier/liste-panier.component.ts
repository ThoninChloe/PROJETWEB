import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article';
import { Observable,pipe } from 'rxjs';
import {Store} from '@ngxs/store';
import { DelArticle } from './../../../actions/delArticle';
import { CatalogueService } from './../../catalogue/catalogue/catalogueService';





@Component({
  selector: 'app-liste-panier',
  templateUrl: './liste-panier.component.html',
    styleUrls: ['./liste-panier.component.css'],
})
export class ListePanierComponent implements OnInit {
  nbProducts: number;
  panier: Observable<Article>;
  public produits : Article[] = [];


  ref: string = 'Angular';
  produit : string = '123456';
  prix : number = 200.0;
  qte : number = 2;
  photo : string;


  constructor(public CatalogueService : CatalogueService,private store: Store) { 
    this.panier = this.store.select(state => state.panier.panier);
  }
 


  onDelClick() {
    console.log("CLICK ON DEL BUTTON")
    this.delArticle (this.ref,this.photo,this.produit,this.prix,this.qte);
  }


  delArticle(ref,photo,produit,prix,qte) { this.store.dispatch(new DelArticle({ ref,photo,produit,prix,qte})); }


  ngOnInit() {
    this.CatalogueService.getProduits().subscribe(response => {
        this.produits = response;
      }
    ); 
  }

}


