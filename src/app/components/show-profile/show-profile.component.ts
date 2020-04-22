import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersProfile } from 'src/app/models/users-profile';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { EventEmitter } from 'protractor';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.scss']
})
export class ShowProfileComponent implements OnInit {

 
  profileForm: FormGroup;
  userLog: UsersProfile;
  profileDisplay:true;

  constructor(private router: Router, private fb: FormBuilder, private profileService: ProfileService, private profile: ProfileComponent ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],

    })
   }

  ngOnInit(): void {
    this.userLog = this.profileService.getUserProfile(sessionStorage.getItem('username'));
    this.profileService.editUserProfile(this.userLog)
   
  }

  changePage(){
    this.profile.saveProfile(this.userLog);
  }

}
