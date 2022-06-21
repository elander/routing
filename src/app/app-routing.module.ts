import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './logged-in.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './products/main/main.component';
import { NgModule } from '@angular/core';
import { PrductComponent } from './products/prduct/prduct.component';
import { ProductsComponent } from './products/products.component';
import { SecretComponent } from './secret/secret.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: ''},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'secret', component: SecretComponent, canActivate: [LoggedInGuard]},
  {path: 'products', component: ProductsComponent,
  children: [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: ':id', component: PrductComponent}
  ]  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
