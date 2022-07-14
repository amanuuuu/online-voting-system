import { Component,OnDestroy,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PositioService } from 'src/app/service/position/positio.service';
import { VotingService } from 'src/app/service/voting/voting.service';

@Component({
  selector: 'app-voting-add',
  templateUrl: './voting-add.component.html',
  styleUrls: ['./voting-add.component.css']
})
export class VotingAddComponent implements OnInit,OnDestroy {
  primeMinisters:any
  presidents:any
  primeForm!:FormGroup
  prime_minister_id:number=1
  president_id:any
  presidentVoted:any
  primeVoted:any
  presidentvote!:string
  primeminvote!: string;
  seasons: any
  constructor(private voteservice:VotingService,private positionservice:PositioService,private router:Router) { 
    this.getPositions()
  }
  ngOnDestroy(): void {
    // localStorage.clear()
  }
 
  primeConfig(){
    this.primeForm = new FormGroup({
      candidate_id:new FormControl(null),
      student_id:new FormControl(null)
    })
  }

  ngOnInit(): void {
    this.getPositions()
    this.primeConfig()
    this.presidentVoted =localStorage.getItem("voted_president")
    this.primeVoted = localStorage.getItem("voted_prime_minister")
  }

  getPositions(){
    this.positionservice.getAll().subscribe((data:any)=>{
      data.forEach((element:any) => {
        console.log(element)
        if(element.positionName == "raisi"){
          this.president_id = element.positionId
          console.log(this.president_id)
          this.getPresident(this.president_id)
        }
        if(element.positionName == "mwakilishi"){
          this.prime_minister_id = element.positionId
          console.log(this.prime_minister_id)
          this.getPrimeMinCand(this.prime_minister_id)
        }
       
      });
    })
  }
 
  getPresident(pres_id:number){
    this.voteservice.getPresident(pres_id).subscribe((data:any)=>{
      this.presidents = data
    })
  }

  getPrimeMinCand(pres_id:number){
    var campus_id = localStorage.getItem("campus_id")
    var faculty_id = localStorage.getItem("faculty_id")
    this.voteservice.getPrimeMinCand(faculty_id,campus_id,pres_id).subscribe((data:any)=>{
      this.seasons=data
      this.primeMinisters=data
      console.log(data)
    })
  }

  primeVote(){
    const std_id = localStorage.getItem("std_id")
    const values = this.primeForm.value
    values['std_id']= std_id
    values['candidate_id']= this.primeminvote
    console.log(values)
    this.voteservice.primeVoting(values).subscribe((res:any)=>{
      this.router.navigateByUrl("studentmain/home")
    })
  }

  presidentVote(){
    const std_id = localStorage.getItem("std_id")
    const values = this.primeForm.value
    values['std_id']= std_id
    values['candidate_id']= this.presidentvote
    console.log(values)
    this.voteservice.presidentVoting(values).subscribe((res:any)=>{
      this.router.navigateByUrl("studentmain/home")
    })
  }

}
