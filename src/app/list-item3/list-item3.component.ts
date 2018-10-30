import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list-item3',
  templateUrl: './list-item3.component.html',
  styleUrls: ['./list-item3.component.css']
})
export class ListItem3Component implements OnInit {

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
          return this.listItems$ = d.slice(20,30)
          // return this.listItems$ = data
        }
    );
  }

}
