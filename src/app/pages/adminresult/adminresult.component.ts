import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositioService } from 'src/app/service/position/positio.service';
import { VotingService } from 'src/app/service/voting/voting.service';

@Component({
  selector: 'app-adminresult',
  templateUrl: './adminresult.component.html',
  styleUrls: ['./adminresult.component.css']
})
export class AdminresultComponent implements OnInit {
  date:any
  election:any
  primeminId:any
  presidentId:any
  presidentResult:any
  primeResultes:any
  constructor(private positionService:PositioService,private votingService:VotingService,private router:Router) { }

  ngOnInit(): void {
    this.getElection()
    this.getPosition()
  }

  getPosition(){
    this.positionService.getAll().subscribe((data:any)=>{
      this.positionService.getElection().subscribe((data2:any)=>{
        data.forEach((element:any) => {
          console.log(element)
          if(element.positionName == "raisi"){
            this.presidentId = element.positionId
            data2.forEach((da:any)=>{
              console.log(da.election_date)
              this.getPresidentResult(this.presidentId,da.election_date)
            })
            
          }
          if(element.positionName == "mwakilishi"){
            this.primeminId = element.positionId
            var c_id = localStorage.getItem("campus_id")
            var f_id = localStorage.getItem("faculty_id")
            console.log(c_id)
            data2.forEach((da:any)=>{
              console.log(da.election_date)
              this.getPrimeResult(element.positionId,da.election_date)
            })
           
          }
         
        });
      })
     
    })
  }
  navigate(){
    this.votingService.data = this.presidentResult
    this.router.navigateByUrl("/adminprint")
  }

  getPresidentResult(p_id:any,date:any){
    this.votingService.getPresidateResult(p_id,date).subscribe((data:any)=>{
      this.presidentResult =data
    })
  }

  getPrimeResult(p_id:any,date:any){
    this.votingService.getPresidateResult(p_id,date).subscribe((res:any)=>{
      this.primeResultes =res
    })
  }
  change(event:any){
    this.getPresidentResult(this.presidentId,this.date)
    this.getPrimeResult(this.primeminId,this.date)
  }

  getElection(){
    this.positionService.getElection().subscribe((data:any)=>{
      this.election = data
      console.log("election data=>",data)
    })
  }
}
