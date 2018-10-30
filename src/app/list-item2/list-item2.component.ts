import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-item2',
  templateUrl: './list-item2.component.html',
  styleUrls: ['./list-item2.component.css']
})
export class ListItem2Component implements OnInit {

  listItems$: Object
  selected: Object
  login

  Clicked(login){
    this.selected = login
    this.login = login.login
  }
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getListItems().subscribe(
       (data) => {
          var  d = data as number[]
          return this.listItems$ = d.slice(10,20)
          // return this.listItems$ = data
        }
    );
  }

}
