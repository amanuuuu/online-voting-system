import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LargeLayoutComponent } from './large-layout/large-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CampusViewComponent } from './pages/campus/campus-view/campus-view.component';
import { CampusAddComponent } from './pages/campus/campus-add/campus-add.component';
import { CampusEditComponent } from './pages/campus/campus-edit/campus-edit.component';
import { CourseViewComponent } from './pages/course/course-view/course-view.component';
import { CourseAddComponent } from './pages/course/course-add/course-add.component';
import { CourseEditComponent } from './pages/course/course-edit/course-edit.component';
import { CandidateViewComponent } from './pages/candidate/candidate-view/candidate-view.component';
import { CandidateAddComponent } from './pages/candidate/candidate-add/candidate-add.component';
import { CandidateEditComponent } from './pages/candidate/candidate-edit/candidate-edit.component';
import { FacutyViewComponent } from './pages/faculty/facuty-view/facuty-view.component';
import { FacutyAdComponent } from './pages/faculty/facuty-ad/facuty-ad.component';
import { FacultyEditComponent } from './pages/faculty/faculty-edit/faculty-edit.component';
import { PositionViewComponent } from './pages/position/position-view/position-view.component';
import { PositionAddComponent } from './pages/position/position-add/position-add.component';
import { PositionEditComponent } from './pages/position/position-edit/position-edit.component';
import { StudentViewComponent } from './pages/student/student-view/student-view.component';
import { StudentAddComponent } from './pages/student/student-add/student-add.component';
import { StudentEditComponent } from './pages/student/student-edit/student-edit.component';
import { VotingViewComponent } from './pages/voting/voting-view/voting-view.component';
import { VotingAddComponent } from './pages/voting/voting-add/voting-add.component';
import { HomeComponent } from './pages/home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule}    from'@angular/material/select';
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";
import { StudentLayoutComponent } from './StudentLayout/student-layout/student-layout.component';
import { LoginComponent } from './login/login/login.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import {  MatTabsModule } from "@angular/material/tabs";
import { PrintLayoutComponent } from './pages/print-layout/print-layout.component';
import { AdminresultComponent } from './pages/adminresult/adminresult.component';
import { AdminprintLayoutComponent } from './pages/adminprint-layout/adminprint-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LargeLayoutComponent,
    CampusViewComponent,
    CampusAddComponent,
    CampusEditComponent,
    CourseViewComponent,
    CourseAddComponent,
    CourseEditComponent,
    CandidateViewComponent,
    CandidateAddComponent,
    CandidateEditComponent,
    FacutyViewComponent,
    FacutyAdComponent,
    FacultyEditComponent,
    PositionViewComponent,
    PositionAddComponent,
    PositionEditComponent,
    StudentViewComponent,
    StudentAddComponent,
    StudentEditComponent,
    VotingViewComponent,
    VotingAddComponent,
    HomeComponent,
    StudentLayoutComponent,
    LoginComponent,
    AdminHomeComponent,
    PrintLayoutComponent,
    AdminresultComponent,
    AdminprintLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatRadioModule,
    MatTabsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
