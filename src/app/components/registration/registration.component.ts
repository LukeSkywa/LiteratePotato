import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  registrazioneForm : FormGroup;
  show: boolean;
  constructor(private fb : FormBuilder , private loginService : LoginService) {
    this.registrazioneForm=this.fb.group({
      username : "",
      password : ""
    });
    this.show = false;
  }

  ngOnInit(): void {
  }

  registrazione(form){
    this.loginService.addUser(form);
  }
  password() {
    this.show = !this.show;
    console.log(this.show);
  }
}
