import React from 'react'
import { Task } from '../../App'

function Tasklist({task, setTask, setView2}: any) 
{
    async function deleteTask(tid: number) {
        const params = new URLSearchParams();
        params.append('id', tid.toString());
        const response = await fetch(`http://localhost:8081/deletetask?${params}`, 
        {
        method: 'POST',
        });
    }
    async function completeTask(tid: number) {
        const params = new URLSearchParams();
        params.append('id', tid.toString());
        const response = await fetch(`http://localhost:8081/complete?${params}`, 
      {
      method: 'POST',
    });
    }

    if (task.completed)
    {
        return (
        <div className="task-item" style={{ backgroundColor: 'lime' }}>
            <div className="task-text">
                <strong>{ task.title }</strong>
        
                <p>{ task.description }</p>
                <p>Owner: { task.owner.username }</p>
                <p>Priority: { task.priority }</p>
            </div>
            <nav className="task-buttons">
               <button  onClick={() => deleteTask(task.tid!)}>Delete</button>
                <button  onClick={() => setView2(3)}>Update</button> 
            </nav>
            { task.subtasks && task.subtasks.length > 0 ? (
                <div >
                    <h4  >Subtasks:</h4>
                    <ul>
                        {task.subtasks.map((subtask: Task) => 
                            subtask.completed ? (
                                <div style = {{backgroundColor: 'lime'}}>
                                    <li  >
                                        <strong>{ subtask.title }</strong>
                                        <p>{ subtask.description }</p>
                                        <p>Owner: { subtask.owner.username }</p>
                                        <p>Priority: { subtask.priority }</p>
                                    </li>
                                    <nav className="subtask-buttons">
                                        <button className="subtask-button delete" onClick={() => deleteTask(subtask.tid!)}>Delete</button>
                                        <button  > Update </button> 
                                    </nav>
                
                                </div>
                            ):(
                                <div className="subtask-item"style={{backgroundColor: 'antiquewhite'}}>
                                    <li className="subtask-text" >
                                        <strong>{ subtask.title }</strong>
                                        <p>{ subtask.description }</p>
                                        <p>Owner: { subtask.owner.username }</p>
                                        <p>Priority: { subtask.priority }</p>
                                        
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
    else
    {
        return (
        <div className="task-item" style={{backgroundColor: 'antiquewhite'}}>
            <div className="task-text">
                <strong>{ task.title }</strong>
                <br></br>
                <p>{ task.description }</p>
                <br></br>
                <p>{ task.description }</p>
                <br></br>
                <p>Owner: { task.owner.username }</p>
                <br></br>
                <p>Priority: { task.priority }</p>
            </div>
            <nav className="task-buttons">
               <button  onClick={() => deleteTask(task.tid!)}>Delete</button>
                <br></br>
                <button  onClick={() => setView2(3)}>Update</button> 
            </nav>
            <br></br>
            { task.subtasks && task.subtasks.length > 0 && (
                <div >
                    <h4  >Subtasks:</h4>
                    <br></br>
                    <ul>
                        {task.subtasks.map((subtask: Task) => 
                
                            subtask.completed ?
                            (
                                <div  style = {{backgroundColor: 'lime'}}>
                                    <li  >
                                        <strong>{ subtask.title }</strong>
                                        <br></br>
                                        <p>{ subtask.description }</p>
                                        <br></br>
                                        <p>Owner: { subtask.owner.username }</p>
                                        <br></br>
                                        <p>Priority: { subtask.priority }</p>
                                    </li>
                                    <nav className="subtask-buttons">
                                        <button className="subtask-button delete" onClick={() => deleteTask(subtask.tid!)}>Delete</button>
                                        <br></br>
                                        <button  > Update </button> 
                                    </nav>
                
                                </div>
                            ):(
                                <div className="subtask-item"style={{backgroundColor: 'antiquewhite'}}>
                                    <li className="subtask-text" >
                                        <strong>{ subtask.title }</strong>
                                        <br></br>
                                        <p>{ subtask.description }</p>
                                        <br></br>
                                        <p>Owner: { subtask.owner.username }</p>
                                        <br></br>
                                        <p>Priority: { subtask.priority }</p>
                                        
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
            )}
        </div>
        )
    }
  
}

export default Tasklist
