import { useState } from 'react'

import './App.css'
import Login from './components/login/login'
import Register from './components/register/Register'
import Tasks from './components/tasks/Tasks'

function App() {
  const [loggedIn, setLoggedIn] = useState<User| null>(null)
  const [view, setView] = useState<number>(1)

  if(loggedIn==null)
  {
    if(view==1)
    {
      return (
        <>
          <button onClick={() => setView(2)}>Register</button>
        <section id="login-sect">
            <p>An account is required to access this page. Please sign in or register.</p>  
            <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          
        </section>
        </>
     )
    }
    if(view==2)
    {
      return (
        <>
          <button onClick={() => setView(1)}>Login</button>
          <section id="register-sect">
            <p>Please fill in the details to create an account.</p>
            <Register setLoggedIn={setLoggedIn} setView={setView} />
          </section>
        </>
      )
    }
  }
  else  {
    return (
      <div>
        <h1 >Welcome, {loggedIn.username}!</h1>
        <Tasks  loggedIn={loggedIn} />
      </div>
    )
  }
}

export default App
export interface User{
    uid?: number,
    username: string,
    password: string,
    email: string,
    dob?: Date,
    first?: string,
    last?: string,
    phone?: string

   
}

export interface Task {
  tid?: number,
    title: string,
    description?: string,
    parent?: Task,
    owner: User,
    completed: boolean,
    priority: number,
    subtasks?: Task[],
}