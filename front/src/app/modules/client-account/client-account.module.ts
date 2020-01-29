import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription/inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientRoutingModule } from './client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorDirective} from '../../../assets/errorDirective';





@NgModule({
  declarations: [InscriptionComponent,ErrorDirective, ]
  ,
  imports: [
    CommonModule,
    ClientRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ClientAccountModule { }
