import React, { use, useEffect } from 'react'
import { Task, User } from '../../App';

import Tasklist from '../Tasklist/Tasklist';
import CreateTasks from '../CreateTasks/CreateTasks';

function Tasks( {loggedIn}: {loggedIn: User}) 
{

  const [tasks, setTasks] = React.useState<Task[]>([])
  const [view2, setView2] = React.useState<number>(0)
  const [selectedTask, setSelectedTask] = React.useState<number| null>(null)
  async function getTasks(user: User, event?: React.FormEvent<HTMLFormElement>) {
    try{
      event?.preventDefault();
      console.log("User: ", loggedIn);
      const params = new URLSearchParams();
      if(user.uid){
         params.append('id', user.uid.toString()); 
      }
      else
      {
        params.append('id', loggedIn.uid!.toString());
      }
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
        console.log("Parsed tasks:", t);
        setTasks(t);
        setView2(0);
      }
    }
    catch(error)
    {
      console.error("Error fetching tasks:", error);
      //return null;
    }

  }
  useEffect(() => {
    getTasks(loggedIn);
  }, []);
  function refreshTasks() {
    getTasks(loggedIn);
    setView2(0);
  }
  function back() {
    setView2(0);
    setSelectedTask(null);
    refreshTasks();
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
  function toCreateTask() {
    setView2(3);
  }
  const compTask = 
  {
    backgroundColor: 'lime'
  }
  const incompTask = {
    backgroundColor: 'antiquewhite'
  }
  //getTasks(loggedIn);
  if(view2==0)
  {
    return (
      <div>
      <nav>
        <button className="refresh" onClick={refreshTasks}>
          Refresh Tasks
        </button>
        <button className="task-button" onClick={toCreateTask}>
          Create Task
        </button>
      </nav>
      { !tasks || tasks.length === 0 ? (
        <p>No tasks available. Please add a task.</p>
      ) : ( // if there are tasks
        tasks.map((task: Task) => (
          
          <Tasklist key={task.tid}  refresh={refreshTasks} completed={task.completed} task={task} setTask={setSelectedTask} setView2={setView2} />
        ))
      )}
      </div>
    )
  }
  
  else if(view2==1)
    {
      return(
        <>
      <button className="task-button" style={{ width: '25%' }} onClick={back}>
        Back to Tasks
      </button>
      </>
      )
      //<app-subtask (viewChange)="changeView($event)" [parentId]="selectedTask()!"></app-subtask>
    }
  else if(view2==2)
    {
      return (
        <>
        <button className="task-button" style={{ width: '25%' }} onClick={back}>
          Back to Tasks
        </button>
        </>
           // <app-update (viewChange)="changeView($event)" [taskId]="selectedTask()!"></app-update>
      )
    }
    else if(view2==3)
    {
      return(
        <>
        <button className="task-button" style={{ width: '25%' }} onClick={back}>
          Back to Tasks
        </button>
        <CreateTasks loggedIn={loggedIn} refresh={refreshTasks} setView2={setView2}/>

      </>

      )
    }

}

export default Tasks
