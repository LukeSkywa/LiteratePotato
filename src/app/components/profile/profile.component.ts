import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { UsersProfile } from 'src/app/model/users-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

showProfileDetail: boolean = true;

  
// private profile: ProfileComponent
  constructor() {
   }

  //  userLog: UsersProfile;
   myProfile:UsersProfile;
  
  
   ngOnInit(): void {
     this.myProfile=JSON.parse(sessionStorage.getItem('user'));
   }

   saveProfile(profile:UsersProfile){
     this.showProfileDetail = !this.showProfileDetail
   }
  //  changePage(){
  //   this.profile.saveProfile(this.userLog);
  // }
}