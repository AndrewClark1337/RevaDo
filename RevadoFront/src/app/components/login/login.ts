import { Component } from '@angular/core';
import { User } from '../../services/user-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class LoginComponent{
    login(uname: string, password: string): User | null {
            if(uname === "johndoe" && password === "password123"){
                return {first:"John",last:"Doe",username:"johndoe",password:"password123",dob:new Date("1990-01-01"),email:"john.doe@example.com"};
            }
            else{
                return null;
            }
            
    
        }
}
