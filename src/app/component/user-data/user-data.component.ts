import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

interface User {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
   name: string;
   surname: string;
   chosenRole: string;
   category: string;
   additional: string;
   categoryValue: string;

  userList: AngularFireList<any>;

   roles: string[] = ['Alumno', 'Profesor', 'Administrador'];
   categories: User[] = [
    {value: 'cat-0', viewValue: '0'},
    {value: 'cat-1', viewValue: '1'},
    {value: 'cat-2', viewValue: '2'}
  ];

  constructor(private userService : UserService, private db: AngularFireDatabase) {
    this.userList = db.list('users');
  }


  insertUser() {
    this.userList.push({
      name: this.name,
      surname: this.surname,
      rol: this.chosenRole,
      category: this.categoryValue,
      additional: this.additional
    });
  }


  ngOnInit(): void {
  }

  changeCategory(cateogory) {
    this.categoryValue = cateogory;
  }
}


export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value between 2-20';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
