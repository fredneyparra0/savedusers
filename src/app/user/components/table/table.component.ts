import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: []
})
export class TableComponent implements OnInit {

  users: any = [];

  constructor( private store: Store<{ user: any }> ) {}

  ngOnInit(): void {
    this.store.select('user').subscribe(users => {
      console.log(users);
      this.users = users;
    })
  }

}
