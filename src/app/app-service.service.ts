import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) {}
   getUser(name){
     return this.http.get('/users?username='+name)
   }
   postUser(){
    return this.http.post('/users', {headers:{bohdan: "yes"}})
   }
}
