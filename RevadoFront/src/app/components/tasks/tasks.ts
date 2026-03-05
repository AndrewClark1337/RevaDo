import { Component, Injector, signal } from '@angular/core';
import { Task, TaskService } from '../../services/task-service';
import { NewtaskComponent } from "../newtask/newtask";

@Component({
  selector: 'app-tasks',
  imports: [NewtaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TaskComponent {
  
  backlog = signal<Task[]>([]);
  inProgress= signal<Array<Task>>([]);
  approval = signal<Array<Task>>([]);
  completed = signal<Array<Task>>([]);

  constructor(private tService: TaskService) {
    this.tService=tService
    this.getTasks();
    
  }
   createTask(task: Task) {
    
    if(task.dueDate instanceof Date){
      var t: Task= {title: task.title, description: task.description, dueDate: task.dueDate, owner: task.owner, assigned: task.assigned, stage: task.stage, priority: task.priority};
    }
    else
    {       
      var t : Task = {title: task.title, description: task.description, owner: task.owner, assigned: task.assigned, stage: task.stage, priority: task.priority};
    }
    
    this.tService.createTask(t);
  }
  async getTasks(){
    try{
      var tasks:Array<Task>|null = await this.tService.getAllTasks(); 
      console.log("Tasks in component:", tasks);
      this.backlog.set([]);
        this.inProgress.set([]);
        this.approval.set([]);
        this.completed.set([]);
      for (let t of tasks ?? [])    
        {
        switch(t.stage)
        {
          case 0:
            console.log("Adding to backlog:", t);
            this.backlog.update(arr=>[...arr, t]);
            break;
          case 1:
            console.log("Adding to inProgress:", t);
            this.inProgress.update(arr=>[...arr, t] );
            break;
          case 2:
            console.log("Adding to approval:", t);
            this.approval.update(arr=>[...arr, t]);
            break;
          case 3:
            console.log("Adding to completed:", t);
            this.completed.update(arr=>[...arr, t]);
            break;
        }
      }
    }
    catch(error)
    {
      console.error("Error fetching tasks:", error);
    }  
  }
}
