import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersProfile } from 'src/app/model/users-profile';
import { MyHttpService } from './my-http.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  usersList: UsersProfile[];
  constructor(private router:Router,private myHttpService: MyHttpService) { 
    this.getUsers();
  }
  getUsers(){
    this.myHttpService.getUsers().subscribe(reponse => {
      this.usersList = reponse;
    }, err => {
      console.log('errore');
    });
  }
  addUser(form){
    this.myHttpService.postUser(form).subscribe(reponse => {
      this.getUsers();
      this.router.navigateByUrl('/login');
    });
  }
}
