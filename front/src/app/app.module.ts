import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from './states/panierState';
import { HeaderComponent } from './pageStructure/header/header.component'
import { BodyComponent } from './pageStructure/body/body.component';
import { FooterComponent } from './pageStructure/footer/footer.component';
import { NavbarMenuComponent } from './pageStructure/header/navbar-menu/navbar-menu.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavbarMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([
      PanierState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
