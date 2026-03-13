import React from 'react'
import { User } from '../../App';
function CreateTasks({loggedIn, refresh, setView2}: {loggedIn: User, refresh: () => void, setView2: (view: number) => void}) {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [priority, setPriority] = React.useState(3);

    async function createTask(event: React.FormEvent<HTMLFormElement>) 
    {
        event.preventDefault();
        const params = new URLSearchParams();
        params.append('title', title);
        params.append('description', description ?? '');
        params.append('owner', loggedIn.uid ? loggedIn.uid.toString() : "0");
        params.append('completed', 'false');

        params.append('priority', priority.toString());
        console.log("Creating task with params:", params.toString());
        const response = await fetch(`http://localhost:8081/newtask?${params.toString()}`, {
        method: 'POST',
        
        }).catch(error => {
        console.error("Error creating task:", error);
        });
        if (response && response.ok) {
            setView2(0);
            refresh();
        console.log("Task created successfully");
        }
    }
  return (
    <div>
      <h1>Create Task</h1>
		<form id="create-task-form"  onSubmit={createTask}>
			<label >Title
			    <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" required />
            </label>
            <br></br>
			<label >Description
			    <textarea id="description" name="description" rows={5} value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
            </label>
            <br></br>
			
			<label >Priority
			<select id="priority" name="priority" value={priority} onChange={(e) => setPriority(parseInt(e.target.value))} >
				<option value="5">5 - Negligible</option>
                <option value="4">4 - Low</option>
				<option value="3" >3 - Medium</option>
                <option value="2">2 - High</option>
				<option value="1">1 - Critical</option>
			</select></label>
            <br></br>
		
        <br></br>
			<button type="submit" >Create</button>
		</form>
		<div className="message" id="message" role="status" aria-live="polite"></div>
    </div>
  )
}

export default CreateTasks
