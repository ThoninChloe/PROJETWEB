import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable  } from 'rxjs';
import { Article} from '../../../models/article';
import { AddArticle } from '../../../actions/addArticle';
import { CatalogueService} from './catalogueService'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent  {

  public produits : Article[] = [];


  ref: string = 'Angular';
  produit : string = '123456';
  prix : number = 200.0;
  qte : number = 2;
  photo : string;
  //search : string;

  searchForm = new FormGroup({})
  mode: any;
  search = new FormControl('');
  productSearch : Observable<Article[]>;



  constructor(public CatalogueService : CatalogueService, private store : Store) { }



  onClick(ref,photo, produit,prix,qte) {
    this.ref=ref;
    this.photo=photo;
    this.produit=produit;
    this.prix=prix;
    this.qte=qte;
    console.log(this.ref)

    this.addArticle(this.ref,this.photo,this.produit,this.prix,this.qte);
  }

  
  addArticle(ref,photo,produit,prix,qte) { 
    this.store.dispatch(new AddArticle({ ref,photo,produit,prix,qte}));
    //"onClick(p.id,p.photo,p.prenom,p.nom,p.prix)">
    if (produit =='Jo'){
      ref ='99';
      photo ='facepalm.jpg';
      produit ='Blague';
      prix = 'Beauf';
      qte= '0.0';
      this.store.dispatch(new AddArticle({ ref,photo,produit,prix,qte}));
    }
  
  }

  getSearchResult(){
    
      this.productSearch = this.CatalogueService.SearchResult(this.search.value);
    //alert(this.sea)
  }


  ngOnInit() {
    this.CatalogueService.getProduits().subscribe(response => {
        this.produits = response;
      }
    ); 
  }

}


