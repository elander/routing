import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: string, password: string): boolean{
    if(user === 'user' && password === 'password') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('username');
  }

  getUser(){
    return localStorage.getItem('username');
  }

  isLoggedIn(){
    return this.getUser() !== null;
  }
}
