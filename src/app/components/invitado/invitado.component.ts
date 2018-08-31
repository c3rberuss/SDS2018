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
    extranjero: boolean;
    progress: any;
    upload_init: boolean;

    constructor(private formBuilder: FormBuilder, private invitadoService: InvitadosService, private storage: AngularFireStorage) {

        this.progress = 0;
        this.extranjero = false;
        this.upload_init = false;

        this.form = this.formBuilder.group({
            id: '0000000000',
            nombre: ['', [
                Validators.required,
                Validators.minLength(15)
            ]],
            extranjero: false,
            nacionalidad: [{value: 'Salvadoreña', disabled: true}, [
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

    active() {
        this.extranjero ? this.form.controls.nacionalidad.disable() : this.form.controls.nacionalidad.enable();
        this.extranjero = !this.extranjero;
    }

    crear(data: Invitado) {
        console.log(data);
        console.log(this.form);
        this.upload_init = true;

        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef.child(`/fotos/${this.file.name}`).put(this.file);

        // // Client-side validation example
        // if (this.file.type.split('/')[0] !== 'image') {
        //     console.error('unsupported file type :( ');
        //     return;
        // }
        //
        // // The storage path
        // const path = `/fotos/${this.file.name}`;
        //
        // // Totally optional metadata
        // const customMetadata = { app: 'My AngularFire-powered PWA!' };
        //
        // // The main task
        // const task = this.storage.upload(path, this.file, { customMetadata });
        //
        // // Progress monitoring
        // this.progress = task.percentageChanges();
        // console.log('progress: ', this.progress);
        // task.then( (a) => {
        //     console.log('Se ha cargado la imagen');
        // }, (b) => {
        //     console.log('Ha ocurrido un error');
        // });
        //
        // const snapshot   = task.snapshotChanges();
        // snapshot.subscribe((e) => {
        //
        // }, (s) => {
        //
        // }, (a) => {
        //
        // });


        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                // upload in progress
                const snapshotRef = snapshot as firebase.storage.UploadTaskSnapshot;
                const bytesTransferred = (snapshotRef).bytesTransferred;
                const totalBytes = (snapshotRef).totalBytes;
                this.progress = (bytesTransferred / totalBytes) * 100;

            },
            (error) => {
                // upload failed
                console.log(error);
            },
            () => {
                // upload success
                data.foto_url = `https://firebasestorage.googleapis.com/v0/b/sds2018-dev.appspot.com/o/fotos%2F${this.file.name}?alt=media`;

                !data.nacionalidad ? data.nacionalidad = 'Salvadoreña' : data.nacionalidad = data.nacionalidad;

                this.invitadoService.crear_invitado(data);
                this.form.reset();
                this.upload_init = false;
            }
        );

    }

    select_file(event) {
        this.file = event.target.files.item(0);
    }

    ngOnInit() {
    }

}
