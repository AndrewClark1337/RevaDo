import { booleanAttribute, ChangeDetectionStrategy, Component, inject, Input, model, signal } from '@angular/core';
import { App} from '../../app';
import {User, UserService} from '../../services/user-service'
import {  RouterLink, RouterOutlet } from "@angular/router";
import { LoginComponent } from "../login/login";
import { RegisterComponent } from "../register/register";
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../tasks/tasks';
import { NewtaskComponent } from '../newtask/newtask';


@Component({
  selector: 'app-home',
  imports: [ TaskComponent,LoginComponent, RegisterComponent, CommonModule, NewtaskComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection:ChangeDetectionStrategy.Default
})
export class HomeComponent {
  injector=inject(UserService);
 
  constructor() {
    console.log("HomeComponent initialized. Logged in user:", this.loggedIn());
  }
  enum: typeof views = views;
 
   @Input() view: number = 1;

  goLogout() {
    this.injector.logout();
    this.view = views.LOGIN;
  }
  goLogin() {
    this.view = views.LOGIN;
    console.log("value of loggedin:", this.injector.loggedIn());
  }
  goRegister() {
    this.view = views.REGISTER;
  }
    loggedIn() {
    return this.injector.loggedIn();
  }
  goTasks() {
    this.view = views.TASKS;
  }
  goNewTask() {
    this.view = views.NEWTASK;
  }
}
  
export enum views {
    LOGIN= 1,
    REGISTER=2,
    TASKS=1,
    NEWTASK=2  }