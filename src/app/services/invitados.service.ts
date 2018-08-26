import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Invitado} from '../interfaces/invitado';

@Injectable({
    providedIn: 'root'
})
export class InvitadosService {

    invitado: Invitado;

    constructor(public db: AngularFirestore) {
    }

    crear_invitado(data: Invitado) {

        data.id = this.db.createId();
        this.db.doc('invitados/' + data.id).set(data);

    }
}
