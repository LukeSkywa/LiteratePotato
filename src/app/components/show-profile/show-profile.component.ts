import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersProfile } from 'src/app/model/users-profile';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { EventEmitter } from 'protractor';
import { ProfileComponent } from '../profile/profile.component';
import { MyHttpService } from 'src/app/services/my-http.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.scss']
})
export class ShowProfileComponent implements OnInit {

 
  profileForm: FormGroup;
  userLog: UsersProfile;
  profileDisplay:true;

  constructor(private myHttpService: MyHttpService ,private router: Router, private fb: FormBuilder, private profileService: ProfileService, private profile: ProfileComponent ) {
    this.profileForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      genere: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],

    })
   }

  ngOnInit(): void {
    // this.userLog = this.myHttpService.getUsers();
    this.profileService.editUserProfile(this.userLog)
   
  }

  changePage(){
    this.profile.saveProfile(this.userLog);
  }

}
