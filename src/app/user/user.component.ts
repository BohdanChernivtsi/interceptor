import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { AppServiceService } from '../app-service.service'

import { fromEvent } from 'rxjs'
import { debounceTime } from 'rxjs/operators';

import { responseModel } from './models/response.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  name = "no username found"
  username = "no username found"
  email = "no username found"
  website = "no username found"

  constructor(private data: AppServiceService) { }

  post(){
  this.data.postUser().subscribe(e=>console.log(e))
  }

  ngOnInit() {
  }

   @ViewChild('input') input:ElementRef;
  
  ngAfterViewInit(){
    fromEvent(this.input.nativeElement, "keyup")
    .pipe(
      debounceTime(500)
      )    
      .subscribe(ch=>{
        const n = ch.target.value
        this.data.getUser(n).subscribe((e: responseModel)=>{
              
                
                  console.log(n)
                  console.log(e)
                  console.log(e[0].username)
                    if (e[0].username === n){
                    
                    this.name = e[0].name 
                    this.username =e[0].username
                    this.email = e[0].email
                    this.website = e[0].website
                    }
                  
                  
                    
          })
         })
      }   
  }