import { Component,Input, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {Article} from './../../../models/article';


@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {
  nbProducts: number;
  panier: Observable<Article>;

  constructor(private store: Store) { 
    this.panier = this.store.select(state => state.panier.panier);
    this.store.select(state => state.panier.panier).subscribe (u => this.nbProducts = u.length);
  }

  ngOnInit() {
  }

}
