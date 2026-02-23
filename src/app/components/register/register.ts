import { Component } from '@angular/core';
import { User } from '../login/login';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {

  register(){
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
        msg.innerText = "User registered successfully!";
        fetch("register",{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(user)
        }).catch(err => {
          console.error("Error registering user:", err);
        });

    } else {
      let msg = document.getElementById("msg") as HTMLParagraphElement;
      msg.innerText = "Error: Passwords do not match";
    }
  }
}
