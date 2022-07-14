import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/service/course/course.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {
viewcourse:any[]=[]
  constructor(private route:Router,private courseService:CourseService) { }

  ngOnInit(): void {
    this.configcourse();
  }
  configcourse(){
    this.courseService.getAllcourse().subscribe((data:any)=>{
      console.log('course>=',data)
      this.viewcourse=data
    })
  }
  Onadd(){
    this.route.navigateByUrl('admin/course-add')
  }
   
  Ondelete(course_id:any){
    this.courseService.delete(course_id).subscribe((res:any)=>{
      this.configcourse()
    })
  }
  Edit(){}

}
