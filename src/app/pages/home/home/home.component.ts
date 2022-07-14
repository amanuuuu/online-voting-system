import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  voters:any
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getStudent()
  }

  getStudent(){
    this.studentService.getAll().subscribe((res:any)=>{
      this.voters = res
    })
  }

}
