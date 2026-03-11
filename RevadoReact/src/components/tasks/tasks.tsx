import React from 'react'
import { Task } from '../../App';

import Tasklist from '../Tasklist/Tasklist';

function Tasks(setLoggedIn: any, loggedIn: any) 
{

  const [tasks, setTasks] = React.useState<Task[]>([])
  const [view, setView] = React.useState<number>(0)
  const [selectedTask, setSelectedTask] = React.useState<number| null>(null)
  async function getTasks(){
    try{
      const params = new URLSearchParams();
      params.append('id',loggedIn.id.toString()); 
      console.log("calling getAllTasks");
      var response=await fetch(`http://localhost:8081/gettasks?${params.toString()}`,{
        method: "GET"
      });
      //var resp = await response.json();
      console.log("Tasks received:", response);
      if (response.body==null){
        //return null;
      }
      else{
        const t: Task[] = await response.json();
        setTasks(t);
      }
    }
    catch(error)
    {
      console.error("Error fetching tasks:", error);
      //return null;
    }

  }
  function refreshTasks() {
    // Implementa
    // function for refreshing tasks
  }
  function back() {
    setView(0);
    setSelectedTask(null);
  }
  function deleteTask(tid: number) {
    // Implementation for deleting a task
  }
  function completeTask(tid: number) {

  }
  function toUpdateTask(task: Task) {
  }
  function toSubtask(task: Task) {
  }
  const compTask = 
  {
    backgroundColor: 'lime'
  }
  const incompTask = {
    backgroundColor: 'antiquewhite'
  }
  getTasks();
  if(view==0)
  {
    return (
      <div>
      <nav>
        <button className="refresh" onClick={refreshTasks}>
          Refresh Tasks
        </button>
      </nav>
      { tasks.length === 0 ? (
        <p>No tasks available. Please add a task.</p>
      ) : ( // if there are tasks
        <Tasklist task={tasks[0]} setTask={setSelectedTask} setView={setView} />
      
      )}
      </div>
    )
  }
  
  else if(view==1)
    {
      return(
      <button className="task-button" style={{ width: '25%' }} onClick={back}>
        Back to Tasks
      </button>
      )
      //<app-subtask (viewChange)="changeView($event)" [parentId]="selectedTask()!"></app-subtask>
    }
  else if(view==2)
    {
      return (
        <button className="task-button" style={{ width: '25%' }} onClick={back}>
          Back to Tasks
        </button>
           // <app-update (viewChange)="changeView($event)" [taskId]="selectedTask()!"></app-update>
      )
    }
}

export default Tasks
