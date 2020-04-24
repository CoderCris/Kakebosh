import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


export interface User {
  additional_data: string;
  category: string;
  id: string;
  lastname: string;
  name: string;
  rol: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns: string[] = ['name','lastname','category','rol'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  public users: Observable<any[]>;
  public usuarios: Array<User> = [];

  constructor(db: AngularFireDatabase) {
    this.users = db.list('/users').valueChanges()
    console.log(this.users
      .subscribe(users => {
      users.forEach(user => {
        console.log(user);
        this.usuarios.push(user);
      })
      this.dataSource = new MatTableDataSource(this.usuarios);
    }))
   }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}