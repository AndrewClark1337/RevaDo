import { User } from "./login";

export function getCurrentUser():User {
    let u: User ={first:"John",last:"Doe",user:"johndoe",pass:"password123",dob:new Date("1990-01-01"),email:"john.doe@example.com", phone:"123-456-7890"};
    return u;
}