import React from 'react'
import App, { User } from '../../App';

function login({setLoggedIn}: any){

  const [uname, setUname] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [msg, setMsg] = React.useState("");


  async function loginUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
      params.append('username', uname);
      params.append('password', pass);
    const response: any = await fetch(`http://localhost:8081/login?${params.toString()}`,{
        method: "GET",
      });
     console.log("Login response received:", response);
      if (response.status!==200) {
        console.error("Error: User not found. Enter a valid username and password.");
        setMsg("Error: User not found. Enter a valid username and password.");
        return null;
      }
      else
      {
         var resp: User = await response.json();
      console.log("Login response received:", resp);
        console.log("Login successful:", response);
        let user: User = {
          uid:resp.uid,
          username: resp.username,
          password: resp.password,
          email: resp.email,
          first: resp.first,
          last: resp.last,
          dob: resp.dob,
          phone: resp.phone
        } as User;
        console.log("User Logged in:", user);
        setLoggedIn(user);
      }    

  }

  return (
    <div className="login-container" >
        <h2>Login</h2>
        <form className="login-form" onSubmit={loginUser}> 
            <label className="form-label">Username: 
              </label><input className="form-input" type="text" value={uname} onChange={(e) => setUname(e.target.value)} />
            <br />
            <label className="form-label">Password:
              <input className="form-input" id="pass" type="password" value={pass} onChange={(e) => setPass(e.target.value)} /> 
            </label>
            <br />
            <nav className="submit">
		    <button className="create-task-button" type="submit" >Login</button>
        </nav>

        </form>
         <div >
            <p className="msg" >{msg}</p>
        </div>   
     
    </div>
  )
}

export default login
