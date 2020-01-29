import { Injectable } from '@angular/core';
import { Utilisateur } from '../../../models/user';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
token=null;
  
  constructor(private http: HttpClient) {
  }
    
  connexion(login : string, mdp : string) {
    var infoCo = JSON.stringify({
      login: login,
      mdp: mdp
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    this.http.post(environment.connexion , infoCo, httpOptions).subscribe(
      data => {  
          alert("Nom : " + data['name'] + "\n age: " + data['age'] + "token: " + data['token']);     
          this.token = data['token'];
        
      },
      error => {

        console.log("Error", error);

      });

    
  }


}
