import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


// Firebase Modules
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { environment } from './../environments/environment';
/*
// Questionable Modules:
import { AngularFireAuthModule } from '@angular/fire';
import { AngularFireStoreModule } from '@angular/fire';
*/
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserDataComponent} from './component/user-data/user-data.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';


// importado
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {UsersListComponent} from './component/users-list/users-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {firebaseConfig} from './firebase';


// Componentes para user
// import { UserComponent } from './component/users/user/user.component';
import {UsersComponent} from './component/users/users.component';
// import { ListUsersComponent } from './component/users/list-users/list-users.component';

// services (para acceder a los métodos de manejo de usuarios)
import {UserService} from './services/user.service';
import {AngularFireDatabase} from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    UsersListComponent,
    // UserComponent,
    UsersComponent,
    // ListUsersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    AngularFireModule.initializeApp(firebaseConfig, 'mda1-a6964'),
    AngularFireDatabaseModule,
    //AngularFireModule.initializeApp(environment.firebase)
    /*
    AngularFireAuthModule,
    AngularFireStoreModule,*/
  ],
  providers: [
    UserService,
    UsersComponent,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
