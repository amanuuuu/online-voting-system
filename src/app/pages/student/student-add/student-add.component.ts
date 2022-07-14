import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/service/course/course.service';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
AddFormStudent!:FormGroup
  constructor(private route:Router,private studentService:StudentService,private courseService:CourseService) { }
  viewCourse:any[]=[]
  ngOnInit(): void {
    this.configform()
    this.configView()
  }

  configView(){
    this.courseService.getAllcourse().subscribe((res:any)=>{
      console.log("course=>",res)
      this.viewCourse=res;
    })
  }
   configform(){
    this.AddFormStudent=new FormGroup({
      firstName:new FormControl(null,Validators.required),
      middleName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      regNo:new FormControl(null,Validators.required),
      dob:new FormControl(null,Validators.required),
      placeOfBirth:new FormControl(null,Validators.required),
      gender:new FormControl(null,Validators.required),
      phoneNumber:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      course_id:new FormControl('',Validators.required),
      username:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
    })
  }
  Onadd(){
    const a =this.AddFormStudent.value
    console.log('value =>',a)
    this.studentService.add(a).subscribe((response)=>{
      alert("succesfuly")
      this.route.navigateByUrl("admin/student")
    })
  }

}
