import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
private candidateApi:String='http://localhost:8056/api/candidate'
  constructor(private http:HttpClient) { }

  getAll(){
   return this.http.get(this.candidateApi+'/getcandidate')
  }
  add(body:any){
    return this.http.post(this.candidateApi+'/addcandidate',body)
  }
  getallcandidate(){
    return this.http.get(this.candidateApi+"/candidate")
  }
  delete(candidate_id:number){
    return this.http.delete(this.candidateApi+"/delete/"+candidate_id)

  }
}
