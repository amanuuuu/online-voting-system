import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
 viewstudent:any[]=[]
  constructor(private route:Router,private studentService:StudentService) { }

  ngOnInit(): void {
    this.configstudent()
    this.getAllStudents()
  }
  configstudent(){
    this.studentService.getallstudent().subscribe((data:any)=>{
     console.log('student>=',data)
     this.viewstudent=data
  })
 }
   Onadd(){
    this.route.navigateByUrl('admin/student-add')
   }
   Ondelete(std_id:number){
    this.studentService.delete(std_id).subscribe((res:any)=>{
     this.configstudent()
    })
   }
   Edit(){}

   getAllStudents(){
    this.studentService.getallstudent().subscribe((data:any)=>{
      this.viewstudent =data
      console.log(data)
    })
   }
}
