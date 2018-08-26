import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HomeComponent} from './components/home/home.component';
// import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {ProductsComponent} from './components/products/products.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {InvitadoComponent} from './components/invitado/invitado.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorage} from 'angularfire2/storage';


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
        HeaderComponent,
        InvitadoComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence(),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        AngularFireStorage
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
