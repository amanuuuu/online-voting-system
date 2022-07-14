import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampusService } from 'src/app/service/campus/campus.service';

@Component({
  selector: 'app-campus-edit',
  templateUrl: './campus-edit.component.html',
  styleUrls: ['./campus-edit.component.css']
})
export class CampusEditComponent implements OnInit {
EditFormCampus!:FormGroup
  constructor(private router:ActivatedRoute,private campusService:CampusService,private route:Router) { }

  ngOnInit(): void {
  this.configEditForm()
    this.router.params.subscribe((parasValue:any)=>{
       console.log('camm',parasValue);
       const campusId=parasValue.campusId;
       this.fetchClassById(campusId);
    })
    
   }

     configEditForm(){
     this.EditFormCampus=new FormGroup({
      campusId:new FormControl(null),
      campusName:new FormControl(null,Validators.required)
    });
  }
  fetchClassById(campusId:number){
    this.campusService.getbyid(campusId).subscribe((response:any)=>{
     console.log('id =',response);
     this.EditFormCampus.get('campusId')?.setValue(response.campusId);
     this.EditFormCampus.get('campusName')?.setValue(response.campusName);
     
    })
  }
  Onedit(){
    const a =this.EditFormCampus.value
    console.log("value =>",a)
    this.campusService.edit(a).subscribe((response)=>{
      this.route.navigateByUrl("admin/campus")
    })
  }
  
}
