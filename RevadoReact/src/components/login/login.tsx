import React from 'react'
import App, { User } from '../../App';

function login({setLoggedIn}: any){

  const [uname, setUname] = React.useState("");
  const [pass, setPass] = React.useState("");


  async function loginUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
      params.append('username', uname);
      params.append('password', pass);
    const response: any = await fetch(`http://localhost:8081/login?${params.toString()}`,{
        method: "GET",
      });
      var resp: User |null= await response.json();
      console.log("Login response received:", resp);
      if (resp==null || response.status !== 200) {
        console.error("Error: User not found or login failed");
        return null;
      }
      else
      {
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
