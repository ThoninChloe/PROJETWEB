import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {Article} from './../../models/article';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nbProducts: number;
  panier: Observable<Article>;

  constructor(private store: Store) { 
    this.panier = this.store.select(state => state.panier.panier);
    this.store.select(state => state.panier.panier).subscribe (u => this.nbProducts = u.length);
  }

  ngOnInit() {
  }

}
