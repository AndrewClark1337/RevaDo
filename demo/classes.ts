
class Person
{
    readonly name: string;
    private password?: string;
    protected address?: string;



    constructor(name: string, password: string)
    {
        this.name = name;
        this.password = password;
    }
    getPassword(): string | undefined {
        return this.password;
    }
    setPassword(newPassword: string): void {
        this.password = newPassword;
    }
}
class Student extends Person{
    school: string;
    constructor(name: string, password: string, school: string) {
        super(name, password);
        this.school = school;
    }
}
let person = new Person("Leon", "raccoons");
console.log(person.getPassword()); // Output: raccoons
let student = new Student("Alice", "password123", "University");

function identity<T>(arg: T): T {
    return arg;
}


let s:string= identity<string>("Hello, World!"); // Output: Hello, World!
console.log(s);

class Box<T> {
    constructor( value: T) {}
}

// does the same thing: create a generic array of numbers
const numbers : number[] = [1, 2, 3, 4, 5];
const numbers2: Array<number> = [1, 2, 3, 4, 5];

const mixed: (number | string)[] = [1, "two", 3, "four"];



// Casting

let value : unknown ="hello";
let length:number = (value as string).length;
console.log(length); 

const inputElement = document.getElementById("myInput");

console.log((inputElement as HTMLInputElement).value);
