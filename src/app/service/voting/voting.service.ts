import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  data:any
  private electionUrl:string = "http://localhost:8056/election/"
  private votingUrl:string = "http://localhost:8056/voting/"
  constructor(private http:HttpClient,private router:Router) { }

  getPrimeMinCand(faculty_id:any,campus_id:any,position_id:any){
    return this.http.get(this.electionUrl+"primemin/faculty/"+faculty_id+"/campus/"+campus_id+"/position/"+position_id)
  }

  getPresident(position_id:any){
    return this.http.get(this.electionUrl+"president/"+position_id)
  }

  primeVoting(body:any){
    return this.http.post(this.votingUrl+"primeminister",body)
  }

  presidentVoting(body:any){
    return this.http.post(this.votingUrl+"president",body)
  }

  getPresidateResult(p_id:any,date:any){
    return this.http.get(this.votingUrl+"presiVotes/p_id/"+p_id+"/date/"+date)
  }

  getPrimeResult(f_id:any,c_id:any,p_id:any,date:any){
    return this.http.get(this.votingUrl+"primeResult/f_id/"+f_id+"/c_id/"+c_id+"/p_id/"+p_id+"/date/"+date)
  }

  print(){
    this.router.navigateByUrl("print").then(()=>{
      window.print()
      this.router.navigateByUrl("studentmain/voting")
    })
  }

  print2(){
    this.router.navigateByUrl("adminprint").then(()=>{
      window.print()
      this.router.navigateByUrl("votingResult")
    })
  }
}
