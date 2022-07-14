import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyService } from 'src/app/service/faculty/faculty.service';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.css']
})
export class FacultyEditComponent implements OnInit {
EditFormFaculty!:FormGroup
  constructor(private router:ActivatedRoute,private route:Router,private facultyService:FacultyService) { }

  ngOnInit(): void {
    this.configEditForm()
    this.router.params.subscribe((parasValue:any)=>{
       console.log('facc',parasValue);
       const facultyId=parasValue.facultyId;
       this.fetchClassById(facultyId);
    })
  }
  configEditForm(){
    this.EditFormFaculty=new FormGroup({
     facultyId:new FormControl(null),
     facultyName:new FormControl(null,Validators.required)
   });
 }
 fetchClassById(facultyId:number){
  this.facultyService.getbyid(facultyId).subscribe((response:any)=>{
   console.log('id =',response);
   this.EditFormFaculty.get('facultyId')?.setValue(response.facultyId);
   this.EditFormFaculty.get('facultyName')?.setValue(response.facultyName);
   
  })
}
Onedit(){
  const a =this.EditFormFaculty.value
  console.log("value =>",a)
  this.facultyService.edit(a).subscribe((response)=>{
    this.route.navigateByUrl("admin/faculty")
  })
}

}
