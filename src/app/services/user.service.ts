import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../models/user';
// Servicio para administración de Usuario sen la lista

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getUsers() {
    return this.userList = this.firebase.list('users');
  }

  insertUser(user: User) {
    this.userList.push({
      name: user.name,
      surname: user.surname,
      rol: user.rol,
      category: user.category,
      additional: user.additional
    });
  }

  updateUser(user: User){

    this.userList.update(user.$key, {
      name: user.name,
      surname: user.surname,
      rol: user.rol,
      category: user.category,
      additional: user.additional
    })
  }

  deleteuser($key: string) {
    this.userList.remove($key);
  }
}
