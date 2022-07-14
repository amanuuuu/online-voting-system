import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private studentApi:String='http://localhost:8056/api/student'
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.studentApi+'/getstudent')
  }
  add(body:any){
    return this.http.post(this.studentApi+'/addstudent',body)
  }

  getallstudent(){
    return this.http.get(this.studentApi+"/student")
  }
  delete(std_id:number){
    return this.http.delete(this.studentApi+"/delete/"+std_id)
  }

  validateStudent(reg_no:any){
    return this.http.get(this.studentApi+"/verify/"+reg_no)
  }
}
