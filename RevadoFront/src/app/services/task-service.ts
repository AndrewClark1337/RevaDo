import { Injectable } from '@angular/core';
import { User } from './user-service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  async getAllTasks(): Promise<Task[]|null> {
      var response=await fetch("http://localhost:8081/gettasks",{
        method: "GET"
      });
      var resp = await response.json();
      console.log("Tasks received:", resp);
      
      return resp;
  }
  async createTask(task: Task) {
    const params = new URLSearchParams();
    params.append('title', task.title);
    params.append('description', task.description ?? '');
    if(task.dueDate instanceof Date&& !isNaN(task.dueDate.getTime()))
    {
      params.append('dueDate', task.dueDate.toISOString().split('T')[0]);
    }
    params.append('owner', task.owner.uid?.toString() ?? '0');
    params.append('assigned', task.assigned?.toString() ?? '0'); 
    params.append('stage', task.stage.toString());
    params.append('priority', task.priority.toString());
    console.log("Creating task with params:", params.toString());
    const response = await fetch(`http://localhost:8081/newtask?${params.toString()}`, {
      method: 'POST',
     
    }).catch(error => {
      console.error("Error creating task:", error);
    });
    if (response && response.ok) {
      console.log("Task created successfully");
    }
  }
}
export interface Task {
  
    title: string,
    description?: string,
    dueDate?: Date,
    updateDate?: Date,
    createDate?: Date,
    owner: User,
    assigned?: number,
    stage: number,
    priority: number
}