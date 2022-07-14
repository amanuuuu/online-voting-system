import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private facultyApi:String ='http://localhost:8056/api/faculty'
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.facultyApi+"/getfaculty")
  }
  add(body:any){
    return this.http.post(this.facultyApi+"/addfaculty",body)
  }
  delete(facultyId:number){
    return this.http.delete(this.facultyApi+"/delete/"+facultyId)
  }
  getbyid(facultyId:number){
    return this.http.get(this.facultyApi+"/faculty/"+facultyId)
   
   }
  edit(body:any){
    return this.http.put(this.facultyApi+"/update",body)
   }
}
