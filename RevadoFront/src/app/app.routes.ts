import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { RegisterComponent } from './components/register/register';
import { LoginComponent } from './components/login/login';
import { TaskComponent } from './components/tasks/tasks';
import { NewtaskComponent } from './components/newtask/newtask';
import { SubtaskComponent } from './components/subtask/subtask';
import { UpdateComponent } from './components/update/update';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, children:[
        {path: 'register', component: RegisterComponent},
        {path: 'login', component: LoginComponent},
        {path: 'tasks', component: TaskComponent, children:[
            {path: 'updatetask', component: NewtaskComponent},
            {path: 'updatetask/:id', component: NewtaskComponent},
            {path: 'subtasks', component: SubtaskComponent},
            {path: 'subtasks/:id', component: SubtaskComponent},
            {path: 'update', component: UpdateComponent}
        ]},
            
        { path: 'newtask', component: NewtaskComponent }
     
    ]},
    { path: 'subtasks', component: SubtaskComponent }
 
];
