import { Component, Input } from '@angular/core';
import { App} from '../../app';
import {User} from '../../services/user-service'
import {  RouterLink, RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  @Input() loggedIn: User | null = null;
 
}
  
