import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseApi:String ='http://localhost:8056/api/course'
  constructor( private http:HttpClient) { }

// getAll(){
//  return this.http.get(this.courseApi+'/getcourse')
// }

getAll(){
  return this.http.get(this.courseApi+'/getcourse')
}

add(body:any){
  return this.http.post(this.courseApi+'/addcourse',body)
}
getAllcourse(){
  return this.http.get(this.courseApi+"/getcourses")
}
delete(course_id:any){
  return this.http.delete(this.courseApi+"/delete/"+course_id)
}
}
