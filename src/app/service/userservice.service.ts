import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private userApi = "http://localhost:8056/user/"
  constructor(private http:HttpClient) { }

  logins(username:string,password:string){
    return this.http.get(this.userApi+"login/username/"+username+"/password/"+password)
  }
}
