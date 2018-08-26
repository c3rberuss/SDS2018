import {Injectable} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';

@Injectable({
    providedIn: 'root'
})
export class UploadFilesService {

    // storage: firebase.storage.Reference;

    constructor(private storage: AngularFireStorage) {
        // this.storage = firebase.storage().ref();
    }

    upload(file) {

        return this.storage.upload(file, file.name);

    }
}
