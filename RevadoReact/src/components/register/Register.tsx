import  { useRef, useState } from 'react'
import { User } from '../../App';
import PhoneInput from 'react-phone-number-input/react-native-input';

function register({ setView}: any) {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [conf, setConf] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [dob, setDob] = useState("");
    const [phone, setPhone] = useState("");

    const [msg, setMsg] = useState("");

    async function registerUser(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
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
                setMsg("User registered successfully! Please log in.");
                
            } else {
                console.error("Error registering user:", response.status);
                setMsg("Error registering user. Try a different username.");
            }
        }
    


  return (
    <div className="reg-container" >
        <h2>Register</h2>
     
       
        <form className="reg-form" onSubmit={registerUser}> 
            <div className="reg-section">
                <label className="form-label ">
                    Username: <input className="reg-input" value={uname} onChange={(e) => setUname(e.target.value)} type="text" required />
                </label>
                <label className="form-label ">
                    Email: <input className="reg-input" value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="text" required /></label>
                <label className="form-label ">
                    Password: <input className="reg-input" value={pass} onChange={(e) => setPass(e.target.value)} id="pass" type="password" required /></label>
                <label className="form-label  ">
                    Confirm Password: <input className="reg-input" value={conf} onChange={(e) => setConf(e.target.value)} id="confirm" type="password" required /></label>
            </div>
            <br />
            <h2>Optional information:</h2>
            <br />
            <div className="reg-section">
                <label className="form-label  ">
                    First Name: <input className="reg-input" value={first} onChange={(e) => setFirst(e.target.value)} id="first"  type="text" /></label>
                <label className="form-label ">
                    Last Name: <input className="reg-input" value={last} onChange={(e) => setLast(e.target.value)} id="last" type="text" /></label>
                <label className="form-label  ">
                    Phone Number: <input className="reg-input" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" /></label>
                <label className="form-label  ">
                    Date of Birth: <input className="reg-input" value={dob} onChange={(e) => setDob(e.target.value)} id="dob" type="date" /></label>
            </div>
           <nav className="submit">
		    <button className="create-task-button" type="submit" >Register</button>
        </nav>

        </form>
        <div >
            <p className="msg" >{msg}</p>
        </div>
       
    </div>
  )
}

export default register
