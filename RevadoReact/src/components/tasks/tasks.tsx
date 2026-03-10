import React from 'react'
import { Task } from '../../services/task-service'

function tasks() {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [view, setView] = React.useState<number>(0)
  const [selectedTask, setSelectedTask] = React.useState<number| null>(null)

    function refreshTasks() {
      // Implementation for refreshing tasks
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
    return 
    (
      <>
      {view===0 && (
        {tasks.map((task) => (}
      )}
      </>
}

export default tasks
