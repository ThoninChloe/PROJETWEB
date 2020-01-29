import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'
import { Observable  } from 'rxjs';
import { Article } from 'src/app/models/article';

import { CatalogueService} from '../catalogue/catalogueService'


@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css'],
})
export class DetailsArticleComponent implements OnInit {
  id : string;
  cat : Observable<Article[]>;
  articleTab : Article[];
  catObservable : Observable<Article[]>;

  constructor(public CatalogueService : CatalogueService,private route:ActivatedRoute,private router:Router) {
    this.id = this.route.snapshot.params.id; 
   }

   
  ngOnInit() { 
    this.id = this.route.snapshot.params.id; 
    console.log(this.id);
    this.CatalogueService.getProduitByID(this.id).subscribe(response => {
      this.articleTab = response;
  }
); 
}
  }


