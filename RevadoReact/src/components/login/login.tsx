import React from 'react'
import { User, UserService } from '../../services/user-service'
import App from '../../App';

function login({setLoggedIn}: any){

  const uService = new UserService();
  const [uname, setUname] = React.useState("");
  const [pass, setPass] = React.useState("");


  async function loginUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Attempting login with username:", uname);
    let user: User|null =await uService.loginUser(uname,pass)
    setLoggedIn(user);

  }

  return (
    <div>
      
           
        <form id="loginForm" onSubmit={loginUser}> 
            <label className="form-label">Username: </label><input id="uname" type="text" value={uname} onChange={(e) => setUname(e.target.value)} />
            <br />
            <label className="form-label">Password: </label><input id="pass" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            <br />
            <button type="submit" > Login </button>

        </form>
            
     
    </div>
  )
}

export default login
