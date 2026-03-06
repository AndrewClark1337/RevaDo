import { Component, Input } from '@angular/core';
import { User, UserService } from '../../services/user-service';
import { Task, TaskService } from '../../services/task-service';

@Component({
  selector: 'app-update',
  imports: [],
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class UpdateComponent {
  @Input() taskId: number = 0;
  constructor(private tService: TaskService, private uService: UserService) {}
async updateTask(form: any) 
  {
    var values = form.value;
   
    const currentUser = this.uService.loggedIn(); 
    console.log("Current logged in user:", currentUser);
    if (!currentUser || !currentUser.uid) {
      console.error('No logged in user or missing uid');
      return;
    }
   
     
      let owner: User= { username: currentUser.username, password: currentUser.password, 
        email: currentUser.email, first: currentUser.first, last: currentUser.last, 
        dob: currentUser.dob, phone: currentUser.phone, uid: currentUser.uid };
    console.log("Owner of the task:", owner);
  
       var newTask: Task = { tid: this.taskId, title: values.title, description: values.description, owner: owner, completed: false, priority: values.priority };
    
    
    console.log("Creating task:", newTask);
    this.tService.update(newTask);
  
  }
}
