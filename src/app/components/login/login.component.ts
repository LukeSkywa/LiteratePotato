import { Injectable, OnInit, Component } from '@angular/core';
import { UsersProfile } from 'src/app/model/users-profile';

import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usersList: UsersProfile[];
  
  loginForm: FormGroup;
  show:boolean;
  constructor(private fb : FormBuilder, private loginService : LoginService) {
    this.loginForm=this.fb.group({
      username : "", 
      password : ""
    })
  }

  ngOnInit(): void {}

  login(form) {
     this.loginService.eseguiLogin(form);
  }
 // login() {
  // this.loginService.eseguiLogin(this.loginForm.value);
  //}
  password() {
    this.show = !this.show;
    console.log(this.show);
  }
}