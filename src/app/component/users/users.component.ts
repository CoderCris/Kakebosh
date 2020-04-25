import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class UsersComponent implements OnInit {

  @Input() showList;

  constructor() {
  }

  ngOnInit(): void {
  }

}
