import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampusService } from 'src/app/service/campus/campus.service';
import { CourseService } from 'src/app/service/course/course.service';
import { FacultyService } from 'src/app/service/faculty/faculty.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
AddFormCourse!:FormGroup
viewfaculty:any[]=[]
viewCampus:any[]=[]
  constructor(private route:Router,private campusService:CampusService,private courseService:CourseService,private facultyService:FacultyService) { }

  ngOnInit(): void {
    this.configForm()
    this.onviewfaculty()
    this.onviewcampus()
    this.configForm()
  }
  configForm(){
    this.AddFormCourse=new FormGroup({
      courseName: new FormControl(null,Validators.required),
      faculty_id:new FormControl(null,Validators.required),
      campus_id:new FormControl(null,Validators.required)
      
      
    })
  }
  onviewcampus(){
    this.campusService.getAll().subscribe((response:any)=>{
      this.viewCampus=response;
    })
  }

  onviewfaculty(){
    this.facultyService.getAll().subscribe((response:any)=>{
      this.viewfaculty=response;
    })
  }
  Onadd(){
    const a =this.AddFormCourse.value
    console.log('value =>',a)
    this.courseService.add(a).subscribe((response)=>{
      alert("succesfuly")
      this.route.navigateByUrl("admin/course")
    })
  }
 
   
  

}
