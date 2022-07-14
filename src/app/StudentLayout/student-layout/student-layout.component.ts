import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.css']
})
export class StudentLayoutComponent {
  @ViewChild("voterVerification") voterVerification!:TemplateRef<any>
  verifyForm!:FormGroup
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver,
      private router:Router,private dialog:MatDialog,private studentservice:StudentService) {
        this.configForm()
      }
  
    
    
    configForm(){
      this.verifyForm = new FormGroup({
        reg_no:new FormControl(null,Validators.required)
      })
    }
    open(){
      this.dialog.open(this.voterVerification)
    }
  
    verify(){
      //this.router.navigateByUrl("voting-add")
      this.studentservice.validateStudent(this.verifyForm.value.reg_no).subscribe((resp:any)=>{
        if(resp !=null){
          alert("not null "+resp.campus_id)
          localStorage.setItem("campus_id",resp.campus_id)
          localStorage.setItem("faculty_id",resp.faculty_id)
          localStorage.setItem("std_id",resp.std_id)
          localStorage.setItem("voted_prime_minister",resp.voted_prime_minister)
          localStorage.setItem("voted_president",resp.voted_president)
          this.router.navigateByUrl("studentmain/voting-add")
        }else{
          alert("no such student")
        }
      })
    }

    logout(){
      this.router.navigateByUrl("/")
    }
}
