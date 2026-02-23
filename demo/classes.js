"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    password;
    address;
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
    getPassword() {
        return this.password;
    }
    setPassword(newPassword) {
        this.password = newPassword;
    }
}
class Student extends Person {
    school;
    constructor(name, password, school) {
        super(name, password);
        this.school = school;
    }
}
let person = new Person("Leon", "raccoons");
console.log(person.getPassword()); // Output: raccoons
let student = new Student("Alice", "password123", "University");
function identity(arg) {
    return arg;
}
let s = identity("Hello, World!"); // Output: Hello, World!
console.log(s);
class Box {
    constructor(value) { }
}
// does the same thing: create a generic array of numbers
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 5];
const mixed = [1, "two", 3, "four"];
// Casting
let value = "hello";
let length = value.length;
console.log(length);
const inputElement = document.getElementById("myInput");
console.log(inputElement.value);
//# sourceMappingURL=classes.js.map