import { Component, effect, EventEmitter, Input, Output, signal } from '@angular/core';
import { User, UserService } from '../../services/user-service';
import { Task, TaskService } from '../../services/task-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  imports: [FormsModule, CommonModule],
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class UpdateComponent {
  @Input() taskId: number = 0;
  @Output() viewChange = new EventEmitter<number>();
  selectedTask = signal<Task>({} as Task);

  constructor(private tService: TaskService, private uService: UserService) {
    this.tService=tService;
    this.uService=uService;
    effect(() => {
    this.getTask();
    });
  }
  
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
  
       var newTask: Task = { tid: this.taskId, title: values.title, 
        description: values.description, owner: owner, completed: false, priority: values.priority };
    
    if (this.selectedTask().parent) 
    {
      newTask.parent = this.selectedTask().parent;
    }
    if (this.selectedTask().subtasks)
    {
      newTask.subtasks = this.selectedTask().subtasks;
    }
    console.log("Creating task:", newTask);
     await this.tService.update(newTask);
      this.viewChange.emit(0);
  }
  async getTask(){
    try{
      console.log("Fetching task with id:", this.taskId);
      var task: Task = await this.tService.getTaskById(this.taskId); 
      console.log("Task in update component:", task);
      
      this.selectedTask.set(task);
    }
    catch (error) {
      console.error("Error fetching task:", error);
    }
  }
 
}
 export enum Priority {
    Critical = 1,
    High = 2,
    Medium = 3,
    Low = 4,
    Negligible = 5
  }