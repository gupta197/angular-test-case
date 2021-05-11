import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../models/users';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  // Store the  user state
  private registerUser: User;

  constructor() { }

  getRegisterUser() {
    // We'll return the user or undefined if no  user
    // The cast to Readonly<User> here is used to maintain immutability
    // in our stored state
    return this.registerUser as Readonly<User>;
  }

  setRegisterUser(user: User) {
    this.registerUser = user;
  }

  getUsers(): Array<{}> {
    return [
      {
        name: 'user1',
        email: 'ab@gmail.com',
        phone: '1234567890',
        password: '1235'
      },
      {
        name: 'user2',
        email: 'abc@gmail.com',
        phone: '1234557890',
        password: 'pass'
      },
      {
        name: 'user3',
        email: 'abcd@gmail.com',
        phone: '1234557798',
        password: 'password'
      }
    ];
  }
  
  // register(values): Observable<any> {
  //   const url = `https://citywoofer-apis.zapbuild.in/users`
  //   return this.http.post<any>(url, values);
  // }
}
