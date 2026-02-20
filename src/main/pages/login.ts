export interface User{
    first?: string,
    last?: string,
    user: string,
    pass: string,
    dob?: Date,
    email: string,
    phone?: string
}

function login(uname: string, password: string): User | null {
    if(uname === "johndoe" && password === "password123"){
        return {first:"John",last:"Doe",user:"johndoe",pass:"password123",dob:new Date("1990-01-01"),email:"john.doe@example.com"};
    }
    return null;

}