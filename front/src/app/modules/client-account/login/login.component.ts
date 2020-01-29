import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login/loginService';
import { Utilisateur } from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  connexionForm : FormGroup;
  utilisateur : Utilisateur = new Utilisateur();


  constructor(private formBuilder : FormBuilder,private LoginService : LoginService)  { 
  }

  ngOnInit() {
    this.connexionForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      mdp: ['', [Validators.required]],
    },
   );
  }

  seConnecter()
  {
        this.LoginService.connexion(
        this.connexionForm.controls['login'].value,
        this.connexionForm.controls['mdp'].value
      )
   }
  get f() { return this.connexionForm.controls; }
}
