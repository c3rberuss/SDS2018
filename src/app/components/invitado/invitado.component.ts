import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InvitadosService} from '../../services/invitados.service';
import {Invitado} from '../../interfaces/invitado';
import {AngularFireStorage} from 'angularfire2/storage';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-invitado',
    templateUrl: './invitado.component.html',
    styleUrls: ['./invitado.component.css']
})
export class InvitadoComponent implements OnInit {

    form: FormGroup;
    file: any;

    constructor(private formBuilder: FormBuilder, private invitadoService: InvitadosService, private storage: AngularFireStorage) {

        this.form = this.formBuilder.group({
            id: ['0000000000'],
            nombre: ['', [
                Validators.required,
                Validators.minLength(15)
            ]],
            nacionalidad: ['', [
                Validators.required,
                Validators.minLength(10)
            ]],
            bio: ['', [
                Validators.required,
                Validators.minLength(10)
            ]],
            profesion: ['', [
                Validators.required,
                Validators.minLength(8)
            ]],
            foto_url: ['', Validators.required]
        });

    }

    crear(data: Invitado) {
        console.log(data);

        let storageRef = firebase.storage().ref();
        let uploadTask = storageRef.child(`/fotos/${this.file.name}`).put(this.file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                // upload in progress
                // upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            },
            (error) => {
                // upload failed
                console.log(error);
            },
            () => {
                // upload success
                data.foto_url = `https://firebasestorage.googleapis.com/v0/b/sds2018-dev.appspot.com/o/fotos%2F${this.file.name}?alt=media`;
                this.invitadoService.crear_invitado(data);
            }
        );

    }

    select_file(event) {
        this.file = event.target.files.item(0);
    }

    ngOnInit() {
    }

}
