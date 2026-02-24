import { Injectable } from '@angular/core';
import { User } from '../components/register/register';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  constructor(private httpClient: HttpClient) {}
  registerUser(user: User) 
  {

    this.httpClient.post("http://localhost:8080/register", {
      newUser:user

    }).subscribe(response => 
      {
          console.log(response);
      }, error => {
          console.error("Error registering user:", error);
      });
  }
}
