import { Injectable } from '@angular/core';
import { User } from './user-service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  async getAllTasks(): Promise<Task[]|null> {
    try{
      console.log("calling getAllTasks");
      var response=await fetch("http://localhost:8081/gettasks",{
        method: "GET"
      });
      //var resp = await response.json();
      console.log("Tasks received:", response);
    
      return response.ok ? await response.json() : null;
    }
    catch(error)
    {
      console.error("Error fetching tasks:", error);
      return null;
    }
  }
  async update(task: Task) {
    const params = new URLSearchParams();
    params.append('tid', task.tid?.toString() ?? '0');
    params.append('title', task.title);
    params.append('description', task.description ?? '');
    params.append('owner', task.owner.uid?.toString() ?? '0');
    params.append('completed', task.completed.toString());
    if(task.subtasks){
      params.append('subtasks', JSON.stringify(task.subtasks));
    }
    params.append('priority', task.priority.toString());
    console.log("Updating task with params:", params.toString());
    const response = await fetch(`http://localhost:8081/updatetask?${params.toString()}`, {
      method: 'POST'});
    const resp = await response.json();
    console.log("Update response:", resp);



  }
  async createTask(task: Task) 
  {
    const params = new URLSearchParams();
    params.append('title', task.title);
    params.append('description', task.description ?? '');
    params.append('owner', task.owner.uid?.toString() ?? '0');
    params.append('completed', task.completed.toString());

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
  async createSubtask(subtask: Task, parentId: number) {
    const params = new URLSearchParams();
    params.append('title', subtask.title);
    params.append('description', subtask.description ?? '');
    params.append('owner', subtask.owner.uid?.toString() ?? '0');
    params.append('completed', subtask.completed.toString());
    params.append('priority', subtask.priority.toString());
    params.append('parent', parentId.toString());
    console.log("Creating subtask with params:", params.toString());
    const response = await fetch(`http://localhost:8081/newtask?${params.toString()}`, {
      method: 'POST',
    }
   ).catch(error => {
      console.error("Error creating subtask:", error);
    });
  }

  async getTaskById(tid: number): Promise<Task> {
    const params = new URLSearchParams();
    params.append('tid', tid.toString());
    const response = await fetch(`http://localhost:8081/findtask?${params}`, 
      {
      method: 'GET',
    });
    const task: Task = await response.json();
    return task;
  }

  async completeTask(tid: number) {
    const params = new URLSearchParams();
    params.append('id', tid.toString());
    const response = await fetch(`http://localhost:8081/complete?${params}`, 
      {
      method: 'POST',
    });
  }
  async deleteTask(tid: number) {
    const params = new URLSearchParams();
    params.append('id', tid.toString());
    const response = await fetch(`http://localhost:8081/deletetask?${params}`, 
      {
      method: 'POST',
    });
  }

}
export interface Task {
  tid?: number,
    title: string,
    description?: string,
    parent?: Task,
    owner: User,
    completed: boolean,
    priority: number,
    subtasks?: Task[],
}