import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';


@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  constructor(uService: UserService) {}
  register(){
    let msg = document.getElementById("msg") as HTMLParagraphElement;
    console.log("Registering user...");
    let uname = (document.getElementById("username") as HTMLInputElement).value;
    let pass = (document.getElementById("password") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let conf= (document.getElementById("confirm") as HTMLInputElement).value;
  
    let first = (document.getElementById("first") as HTMLInputElement).value;
    let last = (document.getElementById("last") as HTMLInputElement).value;
    let dob = (document.getElementById("dob") as HTMLInputElement).value;
    let phone = (document.getElementById("phone") as HTMLInputElement).value;
    if (pass === conf){

      let user: User = {user: uname, pass: pass, email: email, 
        first: first, last: last, dob: new Date(dob), phone: phone};
        console.log("User registered:", user);
        let msg = document.getElementById("msg") as HTMLParagraphElement;
        

    } else {
      
      msg.innerText = "Error: Passwords do not match";
    }
  }
}

export interface User{
    
    user: string,
    pass: string,
    email: string,
    dob?: Date,
    first?: string,
    last?: string,
    phone?: string

   
}