import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Invitado} from '../interfaces/invitado';

@Injectable({
    providedIn: 'root'
})
export class InvitadosService {


    constructor(public db: AngularFirestore) {

    }

    crear_invitado(data: Invitado) {

        data.id = this.db.createId();
        this.db.doc('invitados/' + data.id).set(data);

    }

    delete_invitado(id) {
        this.db.doc('invitados/' + id).delete();
    }

    get_invitados_inter() {
        return this.db.collection('invitados', ref => ref.where('extranjero', '==', true).orderBy('nacionalidad'));
    }

    get_invitados_nac() {
        return this.db.collection('invitados', ref => ref.where('extranjero', '==', false).orderBy('nacionalidad'));
    }
}
