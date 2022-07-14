import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PositioService } from 'src/app/service/position/positio.service';
import { VotingService } from 'src/app/service/voting/voting.service';

@Component({
  selector: 'app-voting-view',
  templateUrl: './voting-view.component.html',
  styleUrls: ['./voting-view.component.css']
})
export class VotingViewComponent implements OnInit,OnChanges {
  date:any
  election:any
  primeminId:any
  presidentId:any
  presidentResult:any
  primeResultes:any
  constructor(private positionService:PositioService,private votingService:VotingService,private router:Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

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
              this.getPrimeResult(f_id,c_id,element.positionId,da.election_date)
            })
           
          }
         
        });
      })
     
    })
  }
  navigate(){
    this.votingService.data = this.presidentResult
    this.router.navigateByUrl("/print")
  }

  getPresidentResult(p_id:any,date:any){
    this.votingService.getPresidateResult(p_id,date).subscribe((data:any)=>{
      this.presidentResult =data
    })
  }

  getPrimeResult(f_id:any,c_id:any,p_id:any,date:any){
    this.votingService.getPrimeResult(f_id,c_id,p_id,date).subscribe((res:any)=>{
      this.primeResultes =res
    })
  }
  change(event:any){
    var c_id = localStorage.getItem("campus_id")
    var f_id = localStorage.getItem("faculty_id")
    this.getPresidentResult(this.presidentId,this.date)
    this.getPrimeResult(f_id,c_id,this.primeminId,this.date)
  }

  getElection(){
    this.positionService.getElection().subscribe((data:any)=>{
      this.election = data
      console.log("election data=>",data)
    })
  }
}
