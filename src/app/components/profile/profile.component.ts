import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { UsersProfile } from 'src/app/models/users-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

showProfileDetail: boolean = true;

  

  constructor() {
   }


  ngOnInit(): void {  
   }

   saveProfile(profile:UsersProfile){
     this.showProfileDetail = !this.showProfileDetail
   }
}