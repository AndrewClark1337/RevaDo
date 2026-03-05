import { ChangeDetectionStrategy, Component, EventEmitter, inject, model, output, Output } from '@angular/core';
import { User, UserService } from '../../services/user-service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection:ChangeDetectionStrategy.Default
})

export class LoginComponent{
     
    injector = inject(UserService);
      
      constructor() {
        
      }
      

  public async login()
  { 
    
    console.log("Attempting login...");
      let uname: string = (document.getElementById("uname") as HTMLInputElement).value;
      let pass: string  = (document.getElementById("pass") as HTMLInputElement).value;
     
      var user: User | null = await this.injector.loginUser(uname, pass);
        console.log("Received from service:", user);
        if (user!=null)
        { 
          console.log("Login successful:", user);
          this.injector.loggedIn.set(user as User);
         // return user;
        }
        else 
        {
          console.error("Login failed: Invalid username or password");
        //  let msg = document.getElementById("msg") as HTMLParagraphElement;
  
        //  msg.innerText = "Invalid username or password!";
          //return null;
        }
        
    }
}
