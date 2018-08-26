import {Component, OnInit} from '@angular/core';
import {InvitadosService} from '../../services/invitados.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    extranjeros: any;
    nacionales: any;

    constructor(private invitados: InvitadosService) {
        this.extranjeros = this.invitados.get_invitados_inter().valueChanges();
        this.nacionales = this.invitados.get_invitados_nac().valueChanges();
    }

    ngOnInit() {

    }

}
