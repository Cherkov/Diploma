import { AngularFireAuth } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { PolicyListComponent } from './authentification/policy-list.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { MaterialModule } from './material/material.module';
import { UploadFileService } from './upload-file.service';
import { AngularFireStorage } from 'angularfire2/storage';

@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MaterialModule
  ],
  providers: [AngularFirestore, AngularFireAuth, UploadFileService, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
