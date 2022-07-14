import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/service/candidate/candidate.service';

@Component({
  selector: 'app-candidate-view',
  templateUrl: './candidate-view.component.html',
  styleUrls: ['./candidate-view.component.css']
})
export class CandidateViewComponent implements OnInit {
  viewcandidate:any[]=[]
  
  constructor(private route:Router,private candidateService:CandidateService) { }

  ngOnInit(): void {
   // this.configCandidate()
    this.getAllCandidates()
  }
  configCandidate(){
      this.candidateService.getAll().subscribe((data:any)=>{
       console.log('candidate>=',data)
       this.viewcandidate=data
    })
  }
  Onadd(){
    this.route.navigateByUrl('admin/candidate-add')
  }
  getAllCandidates(){
    this.candidateService.getallcandidate().subscribe((data:any)=>{
      this.viewcandidate =data
      console.log(this.viewcandidate)
    })
   }
  Ondelete(candidate_id:number){
    this.candidateService.delete(candidate_id).subscribe((res:any)=>{
      this.configCandidate()
    })
  }

 
 Edit(){}
}
