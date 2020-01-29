import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mdpMatch } from '../../../../assets/mdpMatch';
import { InscriptionService } from '../inscription/inscriptionService';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  registerForm : FormGroup;
  utilisateur : Utilisateur = new Utilisateur();
 
  
  constructor(private formBuilder : FormBuilder, private inscriptionService : InscriptionService) { 
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', [Validators.required]],
      codePostal: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      telephone: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      civilite: ['', [Validators.required]],
      login: ['', [Validators.required]],
      mdp: ['', [Validators.required]],
      mdp2: ['', [Validators.required]],
    },
    {
      validator: mdpMatch('mdp', 'mdp2')
  });
  }
 
  creerCompte()
  {
        this.inscriptionService.inscription(
        this.registerForm.controls['nom'].value,
        this.registerForm.controls['prenom'].value,
        this.registerForm.controls['adresse'].value,
        this.registerForm.controls['telephone'].value,
        this.registerForm.controls['email'].value,
        this.registerForm.controls['login'].value,
        this.registerForm.controls['mdp'].value
      ).subscribe(user => this.utilisateur = user);
   }
  

  
  

  get f() { return this.registerForm.controls; }


  
 
}