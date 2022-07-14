import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/service/candidate/candidate.service';
import { PositioService } from 'src/app/service/position/positio.service';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-candidate-add',
  templateUrl: './candidate-add.component.html',
  styleUrls: ['./candidate-add.component.css']
})
export class CandidateAddComponent implements OnInit {
AddFormCandidate!:FormGroup
students:any
election:any
viewposition:any[]=[]
  constructor(private route:Router,
    private candidateService:CandidateService,
    private positionService:PositioService,
    private studentservice:StudentService) { }
  selectfile:any

  ngOnInit(): void {
    this.configForm()
    this.onviewposition()
    this.getStudent()
    this.getElection()
  }
  configForm(){
    this.AddFormCandidate=new FormGroup({
      gpa:new FormControl(null,Validators.required),
      academic_year:new FormControl(null,Validators.required),
      image:new FormControl(null,Validators.required),
      position_id:new FormControl(null,Validators.required),
      student_id:new FormControl(null,Validators.required),
      election_id:new FormControl(null,Validators.required)
    })
}
 onviewposition(){
  this.positionService.getAll().subscribe((response:any)=>{
    this.viewposition=response;
  })
 }
Onadd(){
  const values = new FormData()
  values.append('academic_year',this.AddFormCandidate.value.academic_year)
  values.append('gpa',this.AddFormCandidate.value.gpa)
  values.append('position_id',this.AddFormCandidate.value.position_id)
  values.append('student_id',this.AddFormCandidate.value.student_id)
  values.append('election_id',this.AddFormCandidate.value.election_id)
  values.append('image',this.selectfile)
  console.log(this.AddFormCandidate.value)
  this.candidateService.add(values).subscribe((response)=>{
    alert("succesfuly")
    this.route.navigateByUrl("admin/candidate")
  })
}
  onfilechange(event:any){
    if(event.target.files&& event.target.files[0]){
      const file=event.target.files[0];
      this.selectfile = file
    }
  }

  getStudent(){
    this.studentservice.getAll().subscribe((res:any)=>{
      this.students = res
      console.log(this.students)
    })
  }

  getElection(){
    this.positionService.getElection().subscribe((data:any)=>{
      this.election = data
      console.log("election data=>",data)
    })
  }
}