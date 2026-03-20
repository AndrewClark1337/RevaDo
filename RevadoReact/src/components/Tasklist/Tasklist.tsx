import React from 'react'
import { Task } from '../../App'
import Taskitem from '../Taskitem/Taskitem';

function Tasklist({task, setTask, setView2, completed, refresh}: any) 
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
            refresh();
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
            refresh();
            console.log("Task marked as completed");
        }
        else    {
            console.error("Error marking task as completed:", response.status);
            console.log("Response:", response);
        }

    }
    function toUpdateTask(task: Task) {
        setTask(task.tid);
        setView2(2);
    }
    function toCreateSubtask() {
        setTask(task.tid);
        setView2(1);
    }
   
        return (
        <div className="task-item" style={ completed ? { backgroundColor: 'lime' } : { backgroundColor: 'antiquewhite' } }>
            <div className="task-text">
                <Taskitem task={task} />
            </div>
            <nav className="task-buttons">
               <button className="task-button delete"  onClick={() => deleteTask(task.tid!)}>Delete</button>
                <button className="task-button update"  onClick={() => toUpdateTask(task)}>Update</button> 
                {!completed && <button className="task-button complete" onClick={() => completeTask(task.tid!)}>Complete</button>}
            </nav>
            { task.subtasks && task.subtasks.length > 0 &&(
                <div className="subtask-display">
                    <h4 style={{"color": "black"}} >Subtasks:</h4>
                    <ul className="subtask-list">
                        {task.subtasks.map((subtask: Task) => 
                            subtask.completed ? (
                                <div  className="subtask-item" style = {{backgroundColor: 'lime'}}>
                                    <li className="subtask-text"  >
                                        <Taskitem task={subtask} />
                                    </li>
                                    <nav className="subtask-buttons">
                                        <button className="subtask-button delete" onClick={() => deleteTask(subtask.tid!)}>Delete</button>
                                        <button className="subtask-button update" onClick={() => toUpdateTask(subtask)}>Update</button>
                                    </nav>
                
                                </div>
                            ):(
                                <div className="subtask-item" style={{backgroundColor: 'antiquewhite'}}>
                                    <li className="subtask-text" >
                                        <Taskitem task={subtask} />
                                        
                                    </li>
                                    <nav className="subtask-buttons">

                                        <button className="subtask-button complete"  onClick={() => completeTask(subtask.tid!)}>Complete</button>
                                        <button className="subtask-button update" onClick={() => toUpdateTask(subtask)}>Update</button> 
                                        <button className="subtask-button delete" onClick={() => deleteTask(subtask.tid!)}> Delete</button>
                                    </nav>
                                </div>
                            )
                        )}
                    </ul>
                </div>
                )
            }
            <br></br>
            <button className="create-subtask" onClick={toCreateSubtask}>Create Subtask</button>
        </div>
        )    
    
    
  
}

export default Tasklist
