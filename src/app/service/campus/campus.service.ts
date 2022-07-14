import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampusService {
  private campusApi:String ='http://localhost:8056/api/campus'
  constructor( private http:HttpClient) { }

getAll(){
 return this.http.get(this.campusApi+'/getcampus')
}
add(body:any){
  return this.http.post(this.campusApi+'/addcampus',body)
}
delete(campusId:number){
 return this.http.delete(this.campusApi+"/delete/"+campusId)
}

getbyid(campusId:number){
 return this.http.get(this.campusApi+"/campus/"+campusId)

}
 edit(body:any){
  return this.http.put(this.campusApi+"/update",body)
 }
}
