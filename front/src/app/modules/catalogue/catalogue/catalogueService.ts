import { Injectable } from '@angular/core';
import { Article } from '../../../models/article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class CatalogueService {
    constructor(private httpClient: HttpClient) { }
    getProduits(): Observable<Article[]> {
        return this.httpClient.get<Article[]>(environment.produits);
    }

    getProduitByID(id: string):Observable<Article[]>{
        return this.httpClient.get<Article[]>(environment.produit + "/" + id);
    }

    SearchResult(nom: string):Observable<Article[]>{
        return this.httpClient.get<Article[]>(environment.search + "/" + nom);
    }
   
}
