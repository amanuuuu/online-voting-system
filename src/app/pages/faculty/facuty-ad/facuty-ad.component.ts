import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampusService } from 'src/app/service/campus/campus.service';
import { FacultyService } from 'src/app/service/faculty/faculty.service';

@Component({
  selector: 'app-facuty-ad',
  templateUrl: './facuty-ad.component.html',
  styleUrls: ['./facuty-ad.component.css']
})
export class FacutyAdComponent implements OnInit {
  AddFormFaculty!: FormGroup
  
  constructor(private route:Router,private facultyService:FacultyService) { }

  ngOnInit(): void {
    this.configForm()
    
  }

configForm(){
  this.AddFormFaculty=new FormGroup({
    facultyName:new FormControl(null,Validators.required),
  })
}
Onadd(){
  const a =this.AddFormFaculty.value
  console.log('value =>',a)
  this.facultyService.add(a).subscribe((response)=>{
    alert("succesfuly")
    this.route.navigateByUrl("admin/faculty")
  })
}
}
