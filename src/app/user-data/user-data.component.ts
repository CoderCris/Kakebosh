import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

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

  chosenRole: string;
  roles: string[] = ['Alumno', 'Profesor', 'Administrador'];
  categories: User[] = [
    {value: 'cat-0', viewValue: '0'},
    {value: 'cat-1', viewValue: '1'},
    {value: 'cat-2', viewValue: '2'}
  ];

  constructor() { }

  ngOnInit(): void {
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