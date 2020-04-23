import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';
/*
// Questionable Modules:
import { AngularFireAuthModule } from '@angular/fire';
import { AngularFireStoreModule } from '@angular/fire';
*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes para user
import { UserComponent } from './component/users/user/user.component';
import { UsersComponent } from './component/users/users.component';
import { ListUsersComponent } from './component/users/list-users/list-users.component';

// services (para acceder a los métodos de manejo de usuarios)
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule/*,
    AngularFireAuthModule,
    AngularFireStoreModule,*/
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
