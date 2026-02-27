import { Component, Output, signal } from '@angular/core';

import { HomeComponent } from "./components/home/home";
import { User } from './services/user-service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @Output() loggedIn: User | null = null;
  protected readonly title = signal('RevadoFront');
}


