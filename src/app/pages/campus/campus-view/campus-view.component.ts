import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampusService } from 'src/app/service/campus/campus.service';

@Component({
  selector: 'app-campus-view',
  templateUrl: './campus-view.component.html',
  styleUrls: ['./campus-view.component.css']
})
export class CampusViewComponent implements OnInit {
  viewcampus:any[]=[]
  constructor(private router:Router,private campusService:CampusService) { }

  ngOnInit(): void {
    this.configCampus();
  }

  configCampus(){
    this.campusService.getAll().subscribe((data:any)=>{
      console.log('campus =>',data)
      this.viewcampus=data
    })
  }

  Onadd(){
    this.router.navigateByUrl('admin/addcampus')
  }

  Edit(camp:any){
    this.router.navigateByUrl('admin/campusedit/'+camp.campusId)
  }
  Ondelete(campusId:number){
    this.campusService.delete(campusId).subscribe((res:any)=>{
      this.configCampus()
    })
  }

}
