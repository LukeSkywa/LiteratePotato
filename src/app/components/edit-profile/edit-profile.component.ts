



import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { MyHttpService } from 'src/app/services/my-http.service';
import { ProfileComponent } from '../profile/profile.component';
import { UsersProfile } from 'src/app/model/users-profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
editform:FormGroup;
users:UsersProfile;
  constructor(private form:FormBuilder, private myHttp:MyHttpService, private profile :ProfileComponent) { 
              this.editform=this.form.group({
                  username:'',
                  id:'',
                  admin:'',
                  email:'',
                  password:'',
                  nome:'',
                  cognome:'',
                  genere:'',
                  telefono:'',
              })


  }
 
  ngOnInit(): void {
    this.users=this.myHttp.modifyUser(sessionStorage.getItem('username'));
  }

}

















