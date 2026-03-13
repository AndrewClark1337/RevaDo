import React from 'react'

function Taskitem({task}: any) {
  return (
    <div>
      <strong>{ task.title }</strong>
        <p>{ task.description }</p>
        <p>Owner: { task.owner.username }</p>
        <p>Priority: { task.priority }</p>
    </div>
  )
}

export default Taskitem
