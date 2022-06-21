import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SecretComponent } from './secret/secret.component';
import { ProductsComponent } from './products/products.component';
import { MainComponent } from './products/main/main.component';
import { MoreInfoComponent } from './products/more-info/more-info.component';
import { PrductComponent } from './products/prduct/prduct.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SecretComponent,
    LoginComponent,
    ProductsComponent,
    MainComponent,
    MoreInfoComponent,
    PrductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
