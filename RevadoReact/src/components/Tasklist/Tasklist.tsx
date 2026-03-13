import React from 'react'
import { Task } from '../../App'
import Taskitem from '../Taskitem/Taskitem';

function Tasklist({task, setTask, setView2, completed, refreshTasks}: any) 
{
    async function deleteTask(tid: number) {
        const params = new URLSearchParams();
        params.append('id', tid.toString());
        const response = await fetch(`http://localhost:8081/deletetask?${params}`, 
        {
        method: 'POST',
        });
        if (response.ok)    
        {
            console.log("Task deleted successfully");
            setTask(null);
            refreshTasks();
        }
    }
    async function completeTask(tid: number) {
        const params = new URLSearchParams();
        params.append('id', tid.toString());
        const response = await fetch(`http://localhost:8081/complete?${params}`, 
        {
            method: 'POST',
        });
        if(response.ok)    {
            let t: Task = task;
            t.completed = true;
            setTask(t);
            refreshTasks();
            console.log("Task marked as completed");
        }
        else    {
            console.error("Error marking task as completed:", response.status);
            console.log("Response:", response);
        }

    }

   
        return (
        <div className="task-item" style={ completed ? { backgroundColor: 'lime' } : { backgroundColor: 'antiquewhite' } }>
            <div className="task-text">
                <Taskitem task={task} />
            </div>
            <nav className="task-buttons">
               <button  onClick={() => deleteTask(task.tid!)}>Delete</button>
                <button  onClick={() => setView2(3)}>Update</button> 
            </nav>
            { task.subtasks && task.subtasks.length > 0 ? (
                <div className="subtask-list">
                    <h4  >Subtasks:</h4>
                    <ul>
                        {task.subtasks.map((subtask: Task) => 
                            subtask.completed ? (
                                <div style = {{backgroundColor: 'lime'}}>
                                    <li  >
                                        <Taskitem task={subtask} />
                                    </li>
                                    <nav className="subtask-buttons">
                                        <button className="subtask-button delete" onClick={() => deleteTask(subtask.tid!)}>Delete</button>
                                        <button  > Update </button> 
                                    </nav>
                
                                </div>
                            ):(
                                <div className="subtask-item"style={{backgroundColor: 'antiquewhite'}}>
                                    <li className="subtask-text" >
                                        <Taskitem task={subtask} />
                                        
                                    </li>
                                    <nav className="subtask-buttons">

                                        <button className="subtask-button complete"  onClick={() => completeTask(subtask.tid!)}>Complete</button>
                                        <button className="subtask-button update" onClick={() => setView2(3)}>Update</button> 
                                        <button className="subtask-button delete" onClick={() => deleteTask(subtask.tid!)}> Delete</button>
                                    </nav>
                                </div>
                            )
                        )}
                    </ul>
                </div>
                ) : null 
            }
        </div>
        )    
    
    
  
}

export default Tasklist
