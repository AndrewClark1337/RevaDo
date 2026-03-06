import { Component, effect, Injector, Input, Output, signal } from '@angular/core';
import { Task, TaskService } from '../../services/task-service';
import { NewtaskComponent } from "../newtask/newtask";
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SubtaskComponent } from '../subtask/subtask';
import { UpdateComponent } from '../update/update';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, NewtaskComponent, SubtaskComponent, UpdateComponent], 
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TaskComponent {
  
  tasks = signal<Array<Task>>([]);
  selectedTask=signal<number|undefined>(0);
  @Input() view: number = 0;
  constructor(private tService: TaskService, private uService: UserService) {
    this.tService=tService;
     effect(() => {
    this.getTasks();
    });
    
  }
  async completeTask(id: number) {
    console.log("Completing task with id:", id);
    await this.tService.completeTask(id);
    this.getTasks();
  }
   createTask(task: Task) {
          
      var t : Task = {title: task.title, description: task.description, owner: task.owner, completed: task.completed, priority: task.priority};

    this.tService.createTask(t);
  }
  refreshTasks() {
    console.log("Refreshing tasks...");
    this.getTasks();
  }
  changeView(view: number) {
    this.view=view;
    console.log("Changing view to:", view);
    this.getTasks();
  }
  toUpdateTask(task: Task) {
    this.view=2;
    console.log("Selected task for update:", task.tid);
    this.selectedTask.set(task.tid);
  }
  toSubtask(task: Task) {
    this.view=1;
    this.selectedTask.set(task.tid);
  }
  back(){
    this.view=0;
    this.selectedTask.set(0);
    this.getTasks();
  }
  async getTasks(){
    try{
      var response: Task[] | null = await this.tService.getAllTasks(this.uService.loggedIn()?.uid ?? 0); 
      console.log("Tasks in component:");
      if(response!= null)
      {
         for(let t of response ?? []) {
        console.log(t);
      }
      }
     

      this.tasks.set(response ?? []);
       
      
    }
    catch(error)
    {
      console.error("Error fetching tasks:", error);
    }  
  }

  async deleteTask(id: number) {
    console.log("Deleting task with id:", id);
    await this.tService.deleteTask(id);
    this.getTasks();
  }
}
