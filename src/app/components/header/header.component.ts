import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    menus = [
        {text: 'Inicio', url: '#section-home', enabled: true},
        {text: 'Acerca de', url: '#section-about', enabled: true},
        {text: 'Servicios', url: '#section-services', enabled: true},
        {text: 'Productos', url: '#section-products', enabled: true},
        {text: 'Contacto', url: '#section-contact', enabled: true}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
