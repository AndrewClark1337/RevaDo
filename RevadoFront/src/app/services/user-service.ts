import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  constructor(private httpClient: HttpClient) {}
  registerUser(user: User) 
  {
    try
    {

    
    this.httpClient.post("http://localhost:8080/register", 
    {
      newUser:user

    }).subscribe(response => 
      {
          console.log(response);
          return true
      }, error => {
          console.error("Error registering user:", error);
          return true
      });
   }
    catch(error: any){
      console.error("Error in registerUser:", error);
      return true;
    }
    return true;
  }
}
export interface User{
    
    username: string,
    password: string,
    email: string,
    dob?: Date,
    first?: string,
    last?: string,
    phone?: string

   
}