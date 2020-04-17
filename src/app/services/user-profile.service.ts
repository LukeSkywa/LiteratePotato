import { Injectable } from '@angular/core';
import { UsersProfile } from '../model/users-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  utRegistrati: UsersProfile[]=[
    {email: 'aman', password: '123' },
    {email: 'mario', password: '123'},
  ];

  getList(){
    return this.utRegistrati;
  }
  
  checkUt(password:string, email:string):boolean{
    const user = this.utRegistrati.find(item =>{
      return item.password===password && item.email===email;
    });
    if(user)
      return true;
    else
      return false;
  }

  getUt(email:string, password:string): UsersProfile{
    const user = this.utRegistrati.find(item =>{
      return item.password===password && item.email===email;
    });
    if(user)
      return user;
    else
      return null;
  }

  getIndexOfUt(email:string, password:string):number{
    const p=this.getUt(email,password);
    return this.utRegistrati.indexOf(p);
  }

  editUt(ut: UsersProfile, indice:number): boolean{
    //(method) Array<DatiPersonali>.indexOf(searchElement: DatiPersonali, fromIndex?: number): number
    if(indice!=-1 && indice<this.utRegistrati.length){
      this.utRegistrati[indice]=ut;
      return true;
    }
    else{
      return false;
    }  
  }

  registrazione(ut: UsersProfile):void{
      this.utRegistrati.push(ut); 
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

  constructor() { }
}
