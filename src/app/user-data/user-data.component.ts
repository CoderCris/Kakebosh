import { Component, OnInit } from '@angular/core';

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

  favoriteSeason: string;
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
