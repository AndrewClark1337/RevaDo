import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RegisterComponent, FormsModule],
  //template: 'My HTML',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('example');
}
