import { Injectable } from '@angular/core';
import { ProfileComponent } from '../components/profile/profile.component';
import { UsersProfile } from '../models/users-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  private registredUsers: UsersProfile[] = [
    {
      email: 'd@h', username: 'MimmaO', name: 'Domenica', surname: 'Olinto',
      gender: 'F', phone: '33322211100', password: '123456', image: 'Rem.png'
    },
    {
      email: 'f@h', username: 'FiloB', name: 'Filippo', surname: 'Bottinelli',
      gender: 'M', phone: '33322211100', password: '123456', image: 'xray.png'
    },
    {
      email: 'r@h', username: 'RoccoDB', name: 'Rocco', surname: 'Di Biase',
      gender: 'M', phone: '33322211100', password: '1234567', image: 'vino.png'
    }

  ]

  checkUsersProfile(email: String, password: String) {
    let found: boolean = false;
    for (let i = 0; i < this.registredUsers.length; i++) {
      console.log(this.registredUsers[i].username)
      if (this.registredUsers[i].email === email && this.registredUsers[i].password === password) {
        found = true;
        console.log(found)
        return true;
      }
    }
    console.log(found)
    return false
  }

  getUserProfile(username: String) {
    for (let i = 0; i < this.registredUsers.length; i++) {
      if (this.registredUsers[i].username === username || this.registredUsers[i].email === username) {
        console.log(JSON.parse(JSON.stringify(this.registredUsers[i])));
      return JSON.parse(JSON.stringify(this.registredUsers[i]));
      }
    }
  }

  editUserProfile(user: UsersProfile) {
    for (let i = 0; i < this.registredUsers.length; i++) {
      if (this.registredUsers[i].username === user.username) {
        this.registredUsers[i] = user;
      }
    }
  }

  registerUser(user: UsersProfile) {
    for (let i = 0; i < this.registredUsers.length; i++) {
      if (this.registredUsers[i].username === user.username && this.registredUsers[i].email === user.email) {
        return false;
      }
    }  this.registredUsers.push(user);
    console.log(JSON.parse(JSON.stringify(this.registredUsers)));
  }

  getUserIcon(checkUser: String) {
    for (let i = 0; i < this.registredUsers.length; i++) {
      if (this.registredUsers[i].username === checkUser || this.registredUsers[i].email === checkUser) {
        return this.registredUsers[i].username
      }
    }
  }
}


