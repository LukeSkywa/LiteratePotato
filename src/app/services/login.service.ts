import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersProfile } from 'src/app/model/users-profile';
import { MyHttpService } from './my-http.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usersList: UsersProfile[];
  
  constructor(private router:Router,private myHttpService: MyHttpService) { 
    this.getUsers();
  }

  login(form/*username: string,password:string*/): boolean{
    let controllo=false;
    this.usersList.forEach(element => {
      if(element.username==form.username && element.password==form.password){
        sessionStorage.setItem('user', JSON.stringify(element));
        controllo=true;
      }
    });
    return controllo;
  }

  eseguiLogin(/*username: string,password:string*/form){
    if (this.login(form)) {
      this.router.navigateByUrl('/home');
    }
    else{
      window.alert("utente non trovato")
      this.router.navigateByUrl('/login');
    }
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