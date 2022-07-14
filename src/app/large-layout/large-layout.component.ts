import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from '../service/student/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-large-layout',
  templateUrl: './large-layout.component.html',
  styleUrls: ['./large-layout.component.css']
})
export class LargeLayoutComponent {
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private router:Router,private dialog:MatDialog,private studentservice:StudentService) {
      
  }

  logout(){
    this.router.navigateByUrl("/")
  }

}
