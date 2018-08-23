import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HomeComponent} from './home/home.component';
// import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {ProductsComponent} from './products/products.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';


// const routes: Routes = [
//     { path: '', component: HomeComponent, data: { title: 'Semana de Sistemas' } },
//     { path: 'home', component: HomeComponent, data: { title: 'Semana de Sistemas' }},
//     { path: 'about', component: AboutComponent, data: { title: 'About Page' }},
//     { path: 'products', component: ProductsComponent, data: { title: 'Products Page' } },
//     { path: 'services', component: ServicesComponent, data: { title: 'Services Page' } },
//     { path: 'contact', component: ContactComponent, data: { title: 'Contact Page' }},
//     { path: '**', component: HomeComponent, data: { title: 'Semana de Sistemas' } }
//
// ];


@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      AboutComponent,
      ServicesComponent,
      ProductsComponent,
      ContactComponent,
      FooterComponent,
      HeaderComponent
  ],
  imports: [
    BrowserModule,
      ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
