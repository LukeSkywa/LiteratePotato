import { Injectable } from '@angular/core';
import { UsersProfile } from 'src/app/model/users-profile';
import { Router } from '@angular/router';
import { MyHttpService } from './my-http.service';
 
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  usersList: UsersProfile[];
 
  constructor(private router:Router,private myHttpService: MyHttpService) { 
    this.myHttpService.getUsers();
  }
 
  getList(){
    return this.usersList;
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