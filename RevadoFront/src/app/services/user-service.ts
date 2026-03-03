import { Injectable, model, signal } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  constructor(private http: HttpClient) {
    console.log("UserService initialized");
  }
  loggedIn=signal<User | null>(null);
  async loginUser(username: string, password: string): Promise<User | null> {
    const params = new URLSearchParams();
      params.append('username', username);
      params.append('password', password);
      
    const response: any = await fetch(`http://localhost:8081/login?${params.toString()}`,{
        method: "GET",
      });
      var resp: User |null= await response.json();
      console.log("Login response received:", resp);
      if (resp==null || response.status !== 200) {
        console.error("Error: User not found or login failed");

        return null;
      }
      else
      {
        console.log("Login successful:", response);
        let user: User = {
          username: resp.username,
          password: resp.password,
          email: resp.email,
          first: resp.first,
          last: resp.last,
          dob: resp.dob,
          phone: resp.phone
        } as User;
        console.log("User Logged in:", user);
        this.loggedIn.set(user);
        return user;
      }
    
  }

  registerUser(user: User) 
  {
    const params = new HttpParams()
    .set('username', user.username)
    .set('password', user.password)
    .set('email', user.email || "")
    .set('first', user.first || "")
    .set('last', user.last || "")
    .set('phone', user.phone || "")
    .set('dob', user.dob || "");
    
    this.http.post("http://localhost:8081/register", null, {params}).subscribe(response => 
      {
          console.log(response);
         
      }, error => {
          console.error("Error registering user:", error);
         
      });

    
   }
}
export interface User{

    username: string,
    password: string,
    email: string,
    dob?: string,
    first?: string,
    last?: string,
    phone?: string

   
}