import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PositioService } from 'src/app/service/position/positio.service';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-position-add',
  templateUrl: './position-add.component.html',
  styleUrls: ['./position-add.component.css']
})
export class PositionAddComponent implements OnInit {
AddFormPosition!:FormGroup

  constructor(private route:Router,private positionService:PositioService) { }

  ngOnInit(): void {
    this.configForm()

  }

  configForm(){
    this.AddFormPosition=new FormGroup({
      positionName:new FormControl(null,Validators.required),
    })
  }
  Onadd(){
    const a =this.AddFormPosition.value
    console.log('value =>',a)
    this.positionService.add(a).subscribe((response)=>{
      alert("succesfuly")
      this.route.navigateByUrl("admin/position")
    })
  }
}