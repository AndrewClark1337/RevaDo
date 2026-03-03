import { Component, Input, Output, signal } from '@angular/core';

import { HomeComponent } from "./components/home/home";
import { User } from './services/user-service';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('RevadoFront');
}


