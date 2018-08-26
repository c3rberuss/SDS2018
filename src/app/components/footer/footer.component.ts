import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    year = new Date().getFullYear();
    data: any;
    datas = [
        'Abc',
        'cde',
        'fgh',
        'Hola'
    ];

    visible: boolean;
    texto: string;

    constructor(private db: AngularFirestore) {
        this.data = this.db.collection('enlaces').valueChanges();
        this.visible = false;
        this.texto = 'Mostrar';
    }

    mostrar() {
        this.visible = !this.visible;
        this.visible ? this.texto = 'Ocultar' : this.texto = 'Mostrar';
    }

    ngOnInit() {
    }

}
