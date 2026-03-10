import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login/login'
import { UserService, User } from './services/user-service'
import Register from './components/register/Register'
import Task from './components/tasks/tasks'
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
        <h1>Welcome, {loggedIn.username}!</h1>
        <Task />
      </div>
    )
  }
}

export default App
