import { Component, inject } from '@angular/core';
import { UserService,User } from '../../services/user-service';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-register',
  imports: [RouterLink, HttpClientModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  constructor() {
  }
  injector = inject(UserService);
  register(){
    let msg = document.getElementById("msg") as HTMLParagraphElement;
    console.log("Registering user...");
    let uname: string = (document.getElementById("uname") as HTMLInputElement).value;
    let pass: string  = (document.getElementById("pass") as HTMLInputElement).value;
    let email: string  = (document.getElementById("email") as HTMLInputElement).value;
    let conf: string = (document.getElementById("confirm") as HTMLInputElement).value;
  
    let first: string  = (document.getElementById("first") as HTMLInputElement).value;
    let last: string  = (document.getElementById("last") as HTMLInputElement).value;
    let dob:string = (document.getElementById("dob") as HTMLInputElement).value;
    let phone: string  = (document.getElementById("phone") as HTMLInputElement).value;
    if (pass === conf){

      let user: User = {username: uname, password: pass, email: email, 
        first: first, last: last, dob: dob, phone: phone};
        console.log("User registered:", user);
        let msg = document.getElementById("msg") as HTMLParagraphElement;
        this.injector.registerUser(user);
        msg.innerText = "User registered successfully!";
       console.log("User registered successfully!");

    } else {
      
      msg.innerText = "Error: Passwords do not match";
      console.error("Error: Passwords do not match");
    }
    return;
  }
}



