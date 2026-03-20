import React, { useContext, useEffect } from 'react'
import { LoggedInUser, Task, User } from '../../App';

function UpdateTasks({selectedTask, setView2}: { selectedTask: number, setView2: (view: number) => void})  {
  const [task, setTask] = React.useState<Task>();
  const [title, setTitle] = React.useState(task?.title);
  const [description, setDescription] = React.useState(task?.description);
  const [priority, setPriority] = React.useState(task?.priority);
  const loggedIn = useContext(LoggedInUser)!;
  async function updateTask(event: React.FormEvent<HTMLFormElement>) 
  {
    event.preventDefault();
    const params = new URLSearchParams();
    params.append('tid', selectedTask.toString());
    params.append('title', title ?? task?.title ?? '');
    params.append('description', description ?? task?.description ?? '');
     params.append('priority', priority ? priority.toString() : task?.priority.toString() ?? '3');
    params.append('owner', loggedIn.uid!.toString()); 
    params.append('completed', task?.completed.toString() ?? 'false');
    if(task?.subtasks){
      params.append('subtasks', JSON.stringify(task.subtasks));
    }
   
    console.log("Updating task with params:", params.toString());
    const response = await fetch(`http://localhost:8081/updatetask?${params.toString()}`, {
      method: 'POST'});
    const resp = await response.json();
    console.log("Update response:", resp);
  }
  async function getById(id: number) {
    const params = new URLSearchParams();
    params.append('tid', selectedTask.toString() ?? '0');
    const response = await fetch(`http://localhost:8081/findtask?${params.toString()}`, {
      method: 'GET'
    });
    if (response.ok) {
      const t: Task = await response.json();
      setTask(t);
      console.log("Fetched task:", t);
    } else {
      console.error("Error fetching task:", response.status);
    }
  }
  useEffect(() => {
    getById(selectedTask);
  },[]);
  return (
    <div className="create-task-container">
      <h1>Update Task</h1>
		<form className="create-task-form"  onSubmit={updateTask}>
			<label >Title
			    <input className="create-task-input" id="title" defaultValue={task?.title} value={title} onChange={(e) => setTitle(e.target.value)} type="text" required />
            </label>
            <br></br>
			<label >Description
			    <textarea className="create-task-input" defaultValue={task?.description} id="description" name="description" rows={5} value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
            </label>
            <br></br>
			
			<label >Priority
			<select className="create-task-input" id="priority" defaultValue={task?.priority} name="priority" value={priority} onChange={(e) => setPriority(parseInt(e.target.value))} >
				<option value="5" >5 - Negligible</option>
        <option value="4">4 - Low</option>
				<option value="3" >3 - Medium</option>
        <option value="2">2 - High</option>
				<option value="1">1 - Critical</option>
			</select></label>
            <br></br>
		
        <br></br>
			<nav className="submit">
		    <button className="create-task-button" type="submit" >Update Task</button>
        </nav>
		</form>
		<div className="message" id="message" role="status" aria-live="polite"></div>
    </div>
  )
}

export default UpdateTasks
