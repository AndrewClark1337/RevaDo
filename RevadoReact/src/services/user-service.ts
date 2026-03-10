


export class UserService {
  
  constructor() {
    //console.log("UserService initialized");
  }
  //loggedIn=signal<User | null>(null);


public logout()
{
  //console.log("Logging out user:", this.loggedIn());
  //this.loggedIn.set(null);
  return;
}
async getUsernames(): Promise<Map<String,number>> {
  try {
    const response = await fetch("http://localhost:8081/getusers", {
      method: "GET"
    });
    const usernames = await response.json();
    const map = new Map<String, number>(
      Object.entries(usernames).map(([key, value]) => [key, Number(value)])
    );
   
    console.log("Usernames received:", map);
    return map;
  } catch (error) {
    console.error("Error fetching user names:", error);
    return new Map<String, number>();
  }
}
async findUser(uid: number): Promise<User> {
  try {
    const params = new URLSearchParams();
      params.append('uid', uid.toString());
      const response = await fetch(`http://localhost:8081/getuser?uid=${params}`, {
        method: "GET"
      });
      const user = await response.json();
      console.log("User found:", user);
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw new Error("User not found");
  }
  
  }
  async loginUser(username: string, password: string): Promise<User | null> {
    const params = new URLSearchParams();
      params.append('username', username);
      params.append('password', password);
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
        //this.loggedIn.set(user);
        return user;
      }    
  }

  async registerUser(user: User) 
  {
    const params = new URLSearchParams()
    params.append('username', user.username);
    params.append('password', user.password);
    params.append('email', user.email || "");
    params.append('first', user.first || "");
    params.append('last', user.last || "");
    params.append('phone', user.phone || "");
    params.append('dob', user.dob ? user.dob.toISOString().split('T')[0] : "");
    
    const response = await fetch(`http://localhost:8081/register?${params.toString()}`, {
      method: 'POST',
    });
    const result = await response.json();
    console.log("Registration response:", result);
   
  }
}

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