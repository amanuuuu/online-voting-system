import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LargeLayoutComponent } from './large-layout/large-layout.component';
import { LoginComponent } from './login/login/login.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminprintLayoutComponent } from './pages/adminprint-layout/adminprint-layout.component';
import { AdminresultComponent } from './pages/adminresult/adminresult.component';
import { CampusAddComponent } from './pages/campus/campus-add/campus-add.component';
import { CampusEditComponent } from './pages/campus/campus-edit/campus-edit.component';
import { CampusViewComponent } from './pages/campus/campus-view/campus-view.component';
import { CandidateAddComponent } from './pages/candidate/candidate-add/candidate-add.component';
import { CandidateEditComponent } from './pages/candidate/candidate-edit/candidate-edit.component';
import { CandidateViewComponent } from './pages/candidate/candidate-view/candidate-view.component';
import { CourseAddComponent } from './pages/course/course-add/course-add.component';
import { CourseEditComponent } from './pages/course/course-edit/course-edit.component';
import { CourseViewComponent } from './pages/course/course-view/course-view.component';
import { FacultyEditComponent } from './pages/faculty/faculty-edit/faculty-edit.component';
import { FacutyAdComponent } from './pages/faculty/facuty-ad/facuty-ad.component';
import { FacutyViewComponent } from './pages/faculty/facuty-view/facuty-view.component';
import { HomeComponent } from './pages/home/home/home.component';
import { PositionAddComponent } from './pages/position/position-add/position-add.component';
import { PositionEditComponent } from './pages/position/position-edit/position-edit.component';
import { PositionViewComponent } from './pages/position/position-view/position-view.component';
import { PrintLayoutComponent } from './pages/print-layout/print-layout.component';
import { StudentAddComponent } from './pages/student/student-add/student-add.component';
import { StudentEditComponent } from './pages/student/student-edit/student-edit.component';
import { StudentViewComponent } from './pages/student/student-view/student-view.component';
import { VotingAddComponent } from './pages/voting/voting-add/voting-add.component';
import { VotingViewComponent } from './pages/voting/voting-view/voting-view.component';
import { StudentLayoutComponent } from './StudentLayout/student-layout/student-layout.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {
    path:'admin',
    component:LargeLayoutComponent,
    children:[
      {
        path:'home',
        component:AdminHomeComponent
      },
      {path:'campus',component:CampusViewComponent},
      {path:'addcampus',component:CampusAddComponent},
      {path:'campusedit/:campusId',component:CampusEditComponent},
      {path:'faculty',component:FacutyViewComponent},
      {path:'faculty-add',component:FacutyAdComponent},
      {path:'facuty-edit/:facultyId',component:FacultyEditComponent},
      {path:'course',component:CourseViewComponent},
      {path:'course-add',component:CourseAddComponent},
      {path:'course-edit/:id',component:CourseEditComponent},
      {path:'position',component:PositionViewComponent},
      {path:'position-add',component:PositionAddComponent},
      {path:'position-edit/:id',component:PositionEditComponent},
      {path:'student',component:StudentViewComponent},
      {path:'student-add',component:StudentAddComponent},
      {path:'student-edit/:id',component:StudentEditComponent},
      {path:'candidate',component:CandidateViewComponent},
      {path:'candidate-add',component:CandidateAddComponent},
      {path:'candidate-edit/:id',component:CandidateEditComponent},
      {path:'votingResult',component:AdminresultComponent},  

    ]
  },
  {path:"studentmain",component:StudentLayoutComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {path:'voting-add',component:VotingAddComponent},
      {path:'voting',component:VotingViewComponent},  
    ]
  },

  {path:'adminprint',component:AdminprintLayoutComponent}, 
  {path:'print',component:PrintLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
