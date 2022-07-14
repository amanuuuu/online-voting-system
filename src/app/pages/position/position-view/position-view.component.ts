import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PositioService } from 'src/app/service/position/positio.service';
import { PositionAddComponent } from '../position-add/position-add.component';

@Component({
  selector: 'app-position-view',
  templateUrl: './position-view.component.html',
  styleUrls: ['./position-view.component.css']
})
export class PositionViewComponent implements OnInit {
  @ViewChild("addElection") addElection!:TemplateRef<any>
viewposition:any[]=[]
elections:any
AddFormElection!:FormGroup
  constructor(private route:Router,private positionService:PositioService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.configposition()
    this.formConfig()
    this.getElection()
  }
  formConfig(){
    this.AddFormElection = new FormGroup({
      election_type:new FormControl(''),
      election_date: new FormControl('')
    })
  }

  getElection(){
    this.positionService.getElection().subscribe((res:any)=>{
      this.elections=res
    })
  }

  configposition(){
    this.positionService.getAll().subscribe((data:any)=>{
      console.log('course>=',data)
      this.viewposition=data
    })
  }
  Onadd(){
   const ref= this.dialog.open(PositionAddComponent)
   ref.afterClosed().subscribe(()=>{
    this.configposition()
   })
  }
    Ondelete(positionId:number){
    this.positionService.delete(positionId).subscribe((res:any)=>{
      this.configposition()
    })
  }
  addElect(){
    this.dialog.open(this.addElection)
  }

  Electadd(){
    console.log(this.AddFormElection.value)
    this.positionService.addElection(this.AddFormElection.value).subscribe((res:any)=>{
      console.log(res)
    })
  }
  Edit(){}

}
