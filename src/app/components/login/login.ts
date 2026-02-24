import { Component } from '@angular/core';
import { User } from '../register/register';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class LoginComponent{
    login(uname: string, password: string): User | null {
            if(uname === "johndoe" && password === "password123"){
                return {first:"John",last:"Doe",user:"johndoe",pass:"password123",dob:new Date("1990-01-01"),email:"john.doe@example.com"};
            }
            else{
                return null;
            }
            
    
        }
}
