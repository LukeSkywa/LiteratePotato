import { Injectable } from '@angular/core';
import { UsersProfile } from 'src/app/model/users-profile';
import { Router } from '@angular/router';
import { MyHttpService } from './my-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  usersList: UsersProfile[];
/*
  eseguiLogin(username: string, password: string) {
    if (username != null && username !== '' 
      && password != null && password !== '') {
      sessionStorage.setItem("user", username);
      sessionStorage.setItem("password", password);
      this.router.navigateByUrl('/portale/home');
      alert('benvenuto');
    }else{
      alert('login fallita');
    }
  }

  eseguiLogout(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("admin");
    this.router.navigateByUrl('/login');
    alert("logout effettuato, arrivederci");
  }


} 
usersList: User[];
  
  constructor(private router:Router,private myHttpService: MyHttpService) { 
    this.getUsers();
  }

  getList(){
    return this.usersList;
  }
  constructor(private router:Router,private myHttpService: MyHttpService) { 
    this.getUsers();
  }
  checkUt(password:string, email:string):boolean{
    const user = this.usersList.find(item =>{
      return item.password===password && item.email===email;
    });
    if(user)
      return true;
    else
      return false;
  }

  getUt(email:string, password:string): UsersProfile{
    const user = this.usersList.find(item =>{
      return item.password===password && item.email===email;
    });
    if(user)
      return user;
    else
      return null;
  }

  getIndexOfUt(email:string, password:string):number{
    const p=this.getUt(email,password);
    return this.usersList.indexOf(p);
  }

  editUt(ut: UsersProfile, indice:number): boolean{
    //(method) Array<DatiPersonali>.indexOf(searchElement: DatiPersonali, fromIndex?: number): number
    if(indice!=-1 && indice<this.usersList.length){
      this.usersList[indice]=ut;
      return true;
    }
    else{
      return false;
    }  
  }

  registrazione(ut: UsersProfile):void{
      this.usersList.push(ut); 
  }

  control(email:string, password:string):string{
    let user=this.getUt(email, password);
    if(user){
      return user.admin ? "admin" : "normal" 
    }
    else{
      return "nope";
    }
  }


}
*/