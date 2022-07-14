import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm!:FormGroup
  constructor(private loginservice:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.userConfig()
  }

  userConfig(){
    this.userForm = new FormGroup({
      username:new FormControl(null,Validators.required),
      password:new FormControl("",Validators.required)
    })
  }

  login(){
    this.loginservice.logins(this.userForm.value.username,this.userForm.value.password).subscribe((result:any)=>{
      if (result != null) {
        if (result.role == "admin") {
          console.log("user Admin")
          this.router.navigateByUrl("admin/home")
        } else {
          console.log("user student")
          this.router.navigateByUrl("studentmain/home")
        }
      } else {
        console.log("user Hayumo")
      }
    })
  }

}
