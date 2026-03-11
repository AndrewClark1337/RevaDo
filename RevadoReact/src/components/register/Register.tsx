import  { useState } from 'react'
import { User } from '../../App';

function register({ setView}: any) {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [conf, setConf] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [dob, setDob] = useState("");
    const [phone, setPhone] = useState("");

    

    async function registerUser() {
           const params = new URLSearchParams()
            params.append('username', uname)
            params.append('password', pass)
            params.append('email', email || "")
            params.append('first', first || "")
            params.append('last', last || "")
            params.append('phone', phone || "")
            params.append('dob', dob ? new Date(dob).toISOString().split('T')[0] : "");
            
            var response = await fetch("http://localhost:8081/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: params.toString()
            });

            if (response.ok) {
                console.log("User registered successfully!");
                setView(1);
            } else {
                console.error("Error registering user:", response.status);
            }
        }
    


  return (
    <div>
       
        <form onSubmit={registerUser}> 
            <div className="regSection">
                <label className="form-label a">
                    Username: <input value={uname} onChange={(e) => setUname(e.target.value)} type="text" required />
                </label>
                <label className="form-label b">
                    Email: <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="text" required /></label>
                <label className="form-label c ">
                    Password: <input value={pass} onChange={(e) => setPass(e.target.value)} id="pass" type="password" required /></label>
                <label className="form-label d ">
                    Confirm Password: <input value={conf} onChange={(e) => setConf(e.target.value)} id="confirm" type="password" required /></label>
            </div>
            <br />
            <h2>Optional information:</h2>
            <br />
            <div className="regSection">
                <label className="form-label a ">
                    First Name: <input value={first} onChange={(e) => setFirst(e.target.value)} id="first"  type="text" /></label>
                <label className="form-label b">
                    Last Name: <input value={last} onChange={(e) => setLast(e.target.value)} id="last" type="text" /></label>
                <label className="form-label c ">
                    Phone Number: <input value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" type="text" /></label>
                <label className="form-label d ">
                    Date of Birth: <input value={dob} onChange={(e) => setDob(e.target.value)} id="dob" type="date" /></label>
            </div>
            <button type="submit"> Register </button>

        </form>
            
       
    </div>
  )
}

export default register
