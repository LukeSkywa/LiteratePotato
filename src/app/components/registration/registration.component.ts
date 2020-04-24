import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { UsersProfile } from 'src/app/model/users-profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  registrazioneForm : FormGroup;
  show: boolean;
  user: UsersProfile[];
  constructor(private fb : FormBuilder , private loginService : LoginService, private router:Router) {
    this.registrazioneForm=this.fb.group({
      username :[ '', Validators.required],
      password : ['', Validators.required],
    });
    this.show = false;
  }

  ngOnInit(): void {
  }

  registrazione(){
    this.loginService.addUser(this.registrazioneForm.value);
  }
  password() {
    this.show = !this.show;
    console.log(this.show);
  }
}
