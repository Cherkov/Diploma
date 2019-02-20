import { Component, OnInit, NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthServiceService } from '../authService.service';
import { MaterialModule } from '../material/material.module';
import { FileUpload } from '../fileupload';
import { UploadFileService } from '../upload-file.service';
import { AngularFireStorage } from 'angularfire2/storage';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
@NgModule({
  imports: [MaterialModule],
  exports: [MaterialModule]
})
@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.styl']
})
export class PolicyListComponent implements OnInit {
  // userLogged: boolean = false;
  currentFileUpload: FileUpload;
  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private authServiceService: AuthServiceService,
    private uploadService: UploadFileService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
    // if (firebase.auth().currentUser) {

    // }
    // Use snapshotChanges().map() to store the key
  }
  auth() {
    this.authServiceService.doGoogleLogin();
    // if (firebase.auth().currentUser) {

    // }
  }
}