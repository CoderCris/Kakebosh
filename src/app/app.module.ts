import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from './../environments/environment';

//Firebase Modules
import { AngularFireModule } from '@angular/fire';
/*
import { AngularFireDatabaseModule } from '@angular/fire';
// Questionable Modules:
import { AngularFireAuthModule } from '@angular/fire';
import { AngularFireStoreModule } from '@angular/fire';
*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)/*,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStoreModule,*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
