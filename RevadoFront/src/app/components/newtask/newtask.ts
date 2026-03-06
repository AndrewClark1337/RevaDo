import { Component, signal } from '@angular/core';
import { User, UserService } from '../../services/user-service';
import { Task, TaskService } from '../../services/task-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newtask',
  imports: [FormsModule],
  templateUrl: './newtask.html',
  styleUrl: './newtask.css',
})
export class NewtaskComponent {
  private uService: UserService;
  private tService: TaskService;
  usernames= signal<Map<String, number>>(new Map<String, number>());
  constructor(uService: UserService, tService: TaskService) {
    this.uService = uService;
    this.tService = tService;
    this.getUsers();
  }
  async createTask(form: any) {
    var values = form.value;
   
    const currentUser = this.uService.loggedIn(); 
    console.log("Current logged in user:", currentUser);
    if (!currentUser || !currentUser.uid) {
      console.error('No logged in user or missing uid');
      return;
    }
   
     
      let owner: User= { username: currentUser.username, password: currentUser.password, email: currentUser.email, first: currentUser.first, last: currentUser.last, dob: currentUser.dob, phone: currentUser.phone, uid: currentUser.uid };
    console.log("Owner of the task:", owner);
  
       var newTask: Task = { title: values.title, description: values.description, owner: owner, completed: false, priority: values.priority };
    
    
    console.log("Creating task:", newTask);
    this.tService.createTask(newTask);
  
}
  async getUsers()
  {
     var usernames: Map<String, number> = await this.uService.getUsernames();
     
      this.usernames.set(usernames);
     console.log("Usernames received:", this.usernames());
    
    
    
  }

}
