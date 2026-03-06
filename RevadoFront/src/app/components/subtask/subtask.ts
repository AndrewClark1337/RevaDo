import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../../services/task-service';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-subtask',
  imports: [FormsModule],
  templateUrl: './subtask.html',
  styleUrl: './subtask.css',
})
export class SubtaskComponent {
  @Input() parentId: number = 0;
  @Output() viewChange = new EventEmitter<number>();
  constructor(private tService: TaskService, private uService: UserService) {}
  async createSubtask(form: any) {
    const parentTask: Task = await this.tService.getTaskById(this.parentId);
    const t: Task = {
      title: form.value.title,
      description: form.value.description,
      owner: this.uService.loggedIn()!,
      priority: form.value.priority,
      parent: parentTask,
      completed: false
    };
    this.tService.createSubtask(t, this.parentId);
    this.viewChange.emit(0); 
    }
    
  }


