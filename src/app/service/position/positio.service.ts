import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositioService {
  private positionApi:String ='http://localhost:8056/api/position'
  constructor( private http:HttpClient) { }

getAll(){
 return this.http.get(this.positionApi+'/getposition')
}
add(body:any){
  return this.http.post(this.positionApi+'/addposition',body)
}
delete(positionId:any){
  return this.http.delete(this.positionApi+"/delete/"+positionId)
}

getElection(){
  return this.http.get("http://localhost:8056/election/get")
}

addElection(body:any){
  return this.http.post("http://localhost:8056/election/post",body)
}

getElectionByDate(){
  return this.http.get("http://localhost:8056/election/date")
}

}
