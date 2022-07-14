import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/service/faculty/faculty.service';

@Component({
  selector: 'app-facuty-view',
  templateUrl: './facuty-view.component.html',
  styleUrls: ['./facuty-view.component.css']
})
export class FacutyViewComponent implements OnInit {
  viewfaculty:any[]=[]
  constructor(private router:Router,private facultyService:FacultyService) { }

  ngOnInit(): void {
    this.configFaculty();
  }

  configFaculty(){
    this.facultyService.getAll().subscribe((data:any)=>{
      console.log('faculty>=',data)
      this.viewfaculty=data
    })
  }


  onadd(){
    this.router.navigateByUrl('admin/faculty-add')
  }
  Edit(facult:any){
    this.router.navigateByUrl('admin/faculty-edit/'+facult.facultyId)
  }
  Ondelete(facultyId:number){
    console.log(facultyId)
    this.facultyService.delete(facultyId).subscribe((res:any)=>{
      this.configFaculty()
    })
  }

}
