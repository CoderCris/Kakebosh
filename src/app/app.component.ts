import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kakebosh';

  constructor(private route: Router){

  }
  
  addUser(){
    console.log("Entro")
    this.route.navigate(['user-data']);
  }
}
