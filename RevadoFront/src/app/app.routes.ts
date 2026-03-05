import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { RegisterComponent } from './components/register/register';
import { LoginComponent } from './components/login/login';
import { TaskComponent } from './components/tasks/tasks';
import { NewtaskComponent } from './components/newtask/newtask';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, children:[
        {path: 'register', component: RegisterComponent},
        {path: 'login', component: LoginComponent},
        {path: 'tasks', component: TaskComponent},
            
        { path: 'newtask', component: NewtaskComponent }
     
    ]},
 
];
