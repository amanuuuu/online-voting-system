import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampusService } from 'src/app/service/campus/campus.service';

@Component({
  selector: 'app-campus-add',
  templateUrl: './campus-add.component.html',
  styleUrls: ['./campus-add.component.css']
})
export class CampusAddComponent implements OnInit {
  AddForm !:FormGroup

  constructor(private router:Router,private campusService:CampusService) { }

  ngOnInit(): void {
    this.configform()
  }

  configform(){
    this.AddForm=new FormGroup({
      campusName:new FormControl(null,Validators.required)
    })
  }
  
  Onadd(){
    const a = this.AddForm.value
    this.campusService.add(a).subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('admin/campus')
      
    })
  }

}
