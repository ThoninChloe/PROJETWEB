import { Injectable } from '@angular/core';
import { Utilisateur } from '../../../models/user';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class InscriptionService {
  
  constructor(private http: HttpClient) {
  }
    
  inscription(nom : string, prenom : string, adresse : string, telephone : string, email : string, login : string, mdp : string) {
    return this.http.post<Utilisateur>(environment.inscription , { nom, prenom, adresse, telephone, email, login, mdp });
    
  }


}
